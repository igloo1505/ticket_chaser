import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import cData from '#/data/server/USOnly.json'
import { getCorsHeaders, optionsMethodResponse } from "#/utils/server/cors";
import { LocationJSONData, StateByName } from "#/types/inputValidation";
import { AppError } from "#/classes/ErrorHandling";

const cityData = cData as LocationJSONData

interface RequestContext {
    // params: {
    //     id: string
    // }
}

const router = createEdgeRouter<NextRequest, RequestContext>();


router
    .post(async (req, ctx) => {
        try {
            const { city, state }: { state: StateByName, city: string } = await req.json()
            const stateData = cityData[state]
            const cityIdx = stateData.cities.map((c) => c.name).indexOf(city)
            if (cityIdx < 0) {
                return new AppError({ statusCode: 404 }).genResponse({ message: "City not found", query: { city, state } }, req)
            }
            let res = new NextResponse(JSON.stringify({ city: stateData.cities[cityIdx] }), getCorsHeaders(req, 200));
            return res
        } catch (err) {
            console.error(err)
            return new NextResponse(JSON.stringify({ success: false }), getCorsHeaders(req, 500))
        }
    })


export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
}

export const OPTIONS = optionsMethodResponse
