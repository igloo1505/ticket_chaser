import Tag from '#/components/ui/tag'
import { removeEventFilterTag } from '#/state/slices/form'
import store from '#/state/store'
import React from 'react'



interface SearchPanelTagCollectionProps {
    tags: string[] | string | undefined
}

const SearchPanelTagCollection = (props: SearchPanelTagCollectionProps) => {
    const tags = !props.tags ? [] : Array.isArray(props.tags) ? props.tags : [props.tags]
    return (
        <div className={"flex flex-row justify-center items-center flex-wrap gap-2"}>
            {tags && tags.map((t, i) => <Tag label={t} onRemove={(val: string) => store.dispatch(removeEventFilterTag(val))} key={`event-tag-${i}`} />)}
        </div>
    )
}


SearchPanelTagCollection.displayName = "SearchPanelTagCollection"


export default SearchPanelTagCollection;
