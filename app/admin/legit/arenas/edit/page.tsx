import EditArenaForm from '#/components/pageSpecific/admin/editing/arenaForm/ArenaForm';
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper';
import { prisma } from '#/db/db';
import React from 'react'



interface EditArenaPageProps {
    searchParams?: {
        id?: string
    }
}

const EditArenaPage = async (props: EditArenaPageProps) => {
    let arena;
    if (props?.searchParams?.id) {
        arena = await prisma.arena.findFirst({
            where: {
                id: parseInt(props.searchParams.id)
            },
            include: {
                events: true,
                location: true,
                sections: true,
                amenities: true,
                homeTeams: true
            }
        })
    }

    return (
        <UnderNavbarWrapper center>
            <EditArenaForm arena={arena} />
        </UnderNavbarWrapper>
    )
}


EditArenaPage.displayName = "EditArenaPage"


export default EditArenaPage;
