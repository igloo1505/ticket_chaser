import React, { ChangeEvent, useEffect, useState } from 'react'
import TextInput, { TextInputProps } from './textInput'
import { StateByName } from '#/types/inputValidation'
import clsx from 'clsx'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface AutocompleteOption {
    value: StateByName | string
    index: number
    id?: number
    additionalQueries?: string[]
}

interface AutocompleteProps {
    inputProps: TextInputProps
    onAccept: (v: AutocompleteOption, id?: number) => void
    maxDisplay: number
    items: AutocompleteOption[]
}

const DropdownItem = ({ item, selectedIndex, filteredIndex, filteredLength }: { item: AutocompleteOption, selectedIndex: number, filteredIndex: number, filteredLength: number }) => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setIsActive(filteredIndex === selectedIndex)
    }, [filteredIndex, selectedIndex])
    return (
        <div className={clsx("w-full autocomplete-dropdown-item grid grid-row gap-1 grid-cols-[24px_1fr] bg-base-100 py-2 px-2", filteredIndex === filteredLength - 1 && "rounded-br-sm rounded-bl-sm")}>
            <div className={"w-full h-full grid items-center"}>
                <AiOutlineArrowRight className={clsx("text-primary h-[16px] w-[16px]", isActive ? "opacity-100" : "opacity-0")} />
            </div>
            <div className={"text-sm w-full h-full flex items-center justify-start"}>
                {item.value}
            </div>
        </div>
    )
}


interface DropdownProps extends Pick<AutocompleteProps, "items"> {
    open: boolean
    selectedIndex: number
}

const AutocompleDropdown = ({ open, items, selectedIndex }: DropdownProps) => {
    return (
        <div className={clsx("flex-col w-full justify-center items-center absolute bottom-0 translate-y-[calc(100%)]", open ? "flex" : "hidden")}>{items.map((j, i) => <DropdownItem item={j} key={`dropdown-item-${i}`} selectedIndex={selectedIndex} filteredIndex={i} filteredLength={items.length} />)}</div>
    )

}

const Autocomplete = ({ inputProps, maxDisplay, onAccept, items }: AutocompleteProps) => {
    const [open, setOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [filteredItems, setFilteredItems] = useState<AutocompleteOption[]>([])
    const [hasHadPreviousItems, setHasHadPreviousItems] = useState(false)
    const keys = items.map((b) => b.value)

    useEffect(() => {
        if (selectedIndex > setFilteredItems.length - 1) {
            setSelectedIndex(filteredItems.length - 1)
        }
        if (filteredItems.length > 0) {
            setOpen(true)
        }
    }, [filteredItems])


    const selectByIndex = (idx: number) => {
        onAccept(items[idx])
        setSelectedIndex(-1)
        setFilteredItems([])
    }

    const autoSelect = (val: string) => {
        if (val === "") return false
        let kIndex = keys.indexOf(val as StateByName)
        if (kIndex >= 0) {
            selectByIndex(kIndex)
            return true
        }
        return false
    }

    const filterItems = (val: string, noSelect?: boolean) => {
        const reg = RegExp(val, "gmi")
        const filtered = items.filter((j) => {
            let valTest = reg.test(j.value)
            /* BUG: For some reason regex test isn't working reliably. Come back and figure this out later. */
            const indexTest = j.value.toLowerCase().indexOf(val.toLowerCase())
            if (indexTest >= 0) return true
            if (valTest) return true
            if (j.additionalQueries) {
                let otherTest = j.additionalQueries.filter((k) => reg.test(k))
                if (otherTest.length >= 1) return true
            }
            return false
        }
        )
        const slicedItems = filtered.slice(0, maxDisplay)
        if (slicedItems.length === 0) {
            setFilteredItems([])
            setOpen(false)
            return true
        }
        if (slicedItems.length === 1) {
            if (!noSelect) {
                selectByIndex(slicedItems[0].index)
            }
            setOpen(false)
            return false
        }
        setFilteredItems(slicedItems)
        return true
    }


    const onInputChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        if (target.value === "") {
            inputProps.onChange(e)
            setFilteredItems([])
            setOpen(false)
            return
        }
        if (target.value.length < inputProps.value.length) {
            inputProps.onChange(e)
            return
        }
        const shouldSelect = autoSelect(target.value)
        setOpen(!shouldSelect)
        if(!shouldSelect) setFilteredItems([])
        if (!shouldSelect) {
            const _f = filterItems(target.value)
            if (_f) {
                inputProps.onChange(e)
                return
            }
        }
    }

    useEffect(() => {
        if (items.length > 0 && filteredItems.length === 0 && inputProps.value.length !== 0 && !hasHadPreviousItems) {
            filterItems(inputProps.value, true)
            setHasHadPreviousItems(true)
        }
    }, [items])

    const incrementSelectIndex = () => {
        const newIndex = selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1
        setSelectedIndex(newIndex)
    }

    const decrementSelectIndex = () => {
        const newIndex = selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1
        setSelectedIndex(newIndex)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === "Enter" && selectedIndex >= 0 && selectedIndex <= filteredItems.length - 1) {
            e.preventDefault()
            e.stopPropagation()
            selectByIndex(filteredItems[selectedIndex].index)
            setFilteredItems([])
            setOpen(false)
        }
        if (e.code === "Tab") {
            e.preventDefault()
            e.stopPropagation()
            if (e.shiftKey) {
                return decrementSelectIndex()
            }
            if (!e.shiftKey) {
                return incrementSelectIndex()
            }
        }
    }

    return (
        <div className={"relative"}>
            <TextInput {...inputProps} onChange={onInputChange} extraInputProps={{ onKeyDown: handleKeyDown }} />
            <AutocompleDropdown items={filteredItems} open={open} selectedIndex={selectedIndex} />
        </div>
    )
}




Autocomplete.displayName = "Autocomplete"


export default Autocomplete;
