import React, { ChangeEvent, useEffect, useState } from 'react'
import TextInput, { TextInputProps } from './textInput'
import { StateByName } from '#/types/inputValidation'
import clsx from 'clsx'


interface AutocompleteOption {
    value: StateByName
    index: number
    additionalQueries?: string[]
}

interface AutocompleteProps {
    inputProps: TextInputProps
    onAccept: (v: AutocompleteOption) => void
    maxDisplay: number
    items: AutocompleteOption[]
}

const DropdownItem = ({ item, selectedIndex }: { item: AutocompleteOption, selectedIndex: number }) => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setIsActive(item.index === selectedIndex)
    }, [item.index, selectedIndex])
    return (
        <div className={"text-sm w-full"}>{item.value}</div>
    )
}


interface DropdownProps extends Pick<AutocompleteProps, "items"> {
    open: boolean
    selectedIndex: number
}

const AutocompleDropdown = ({ open, items, selectedIndex }: DropdownProps) => {
    return (
        <div className={clsx("flex-col justify-center items-center absolute", open ? "flex" : "hidden")}>{items.map((j, i) => <DropdownItem item={j} key={`dropdown-item-${i}`} selectedIndex={selectedIndex} />)}</div>
    )

}

const Autocomplete = ({ inputProps, maxDisplay, onAccept, items }: AutocompleteProps) => {
    const [open, setOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [filteredItems, setFilteredItems] = useState<AutocompleteOption[]>([])
    const keys = items.map((b) => b.value)

    const selectByIndex = (idx: number) => {
        console.log("items[idx]: ", items[idx])
        onAccept(items[idx])
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

    const filterItems = (val: string) => {
        const reg = RegExp(val, "gi")
        const filtered = items.filter((j) => {
            let valTest = reg.test(j.value)
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
            setOpen(false)
            return false
        }
        if (slicedItems.length === 1) {
            selectByIndex(slicedItems[0].index)
            setOpen(false)
            return false
        }
        setFilteredItems(slicedItems)
        return true
    }


    const onInputChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement
        if (target.value.length < inputProps.value.length) {
            inputProps.onChange(e)
            return
        }
        const shouldSelect = autoSelect(target.value)
        setOpen(!shouldSelect)
        if (!shouldSelect) {
            const _f = filterItems(target.value)
            if (_f) {
                inputProps.onChange(e)
                return
            }
        }
    }

    return (
        <div className={"relative"}>
            <TextInput {...inputProps} onChange={onInputChange} />
            <AutocompleDropdown items={filteredItems} open={open} selectedIndex={selectedIndex} />
        </div>
    )
}


Autocomplete.displayName = "Autocomplete"


export default Autocomplete;
