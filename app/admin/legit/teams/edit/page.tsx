import EditTeamForm from '#/components/forms/editTeam/mainForm';
import UnderNavbarWrapper from '#/components/utility/underNavbarWrapper';
import { prisma } from '#/db/db';
import React from 'react'



interface EditTeamsPageProps {
    searchParams: {
        teamId?: string
    }
}

const EditTeamsPage = async (props: EditTeamsPageProps) => {
    let team;
    if (props?.searchParams?.teamId) {
        team = await prisma.team.findFirst({
            where: {
                id: parseInt(props.searchParams.teamId)
            },
            include: {
            }
        })
    }
    return (
        <UnderNavbarWrapper center>
            <EditTeamForm />
        </UnderNavbarWrapper>
    )
}


EditTeamsPage.displayName = "EditTeamsPage"


export default EditTeamsPage;
