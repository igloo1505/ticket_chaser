OUTPUT=$HOME/Desktop/test
touch $OUTPUT/commands.txt
builtin command cat $LEGITROOT/notes/cmds.txt > $OUTPUT/commands.txt

dostuff() {
    local options=()
    local cmds=()
    while read i
    do
        parts=("${(@s[|])i}")
        options+=($parts[1])
        cmds+=($parts[2])
    done < $OUTPUT/commands.txt
    selected=$(for i in $options
        do
            echo $i
    done | fzf)
    cmd=$cmds[${options[(Ie)$selected]}]
    $(sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'<<<"${cmd}")
}

dostuff
