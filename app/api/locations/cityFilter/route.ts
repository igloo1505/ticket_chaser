import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import { prisma } from "#/db/db";
import { AppError } from "#/classes/ErrorHandling";
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { CityDataType, CityFilterQueryParams, StateByName } from "#/types/inputValidation";
import cData from '#/data/server/USOnly.json'
import { USSTATE } from "@prisma/client";

const cityData = cData as { [k in StateByName]: {
    cities: CityDataType[],
    name: StateByName,
    id: number,
    latitude: string,
    longitude: string
    country_id: number
    state_code: USSTATE | string
}
}


interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            const { query }: { query: CityFilterQueryParams } = await req.json()
            const reg = RegExp(query.cityInput, "gi")
            const filtered = cityData[query.state].cities.filter((c) => reg.test(c.name))
            return new NextResponse(JSON.stringify({
                cities: filtered.map((c) => ({
                name: c.name,
                    id: c.id
                })),
                success: true
            }), getCorsHeaders(req, 200));
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
