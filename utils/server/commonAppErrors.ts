import { AppError } from "#/classes/ErrorHandling";
import { NextRequest } from "next/server";

export const unAuthorizedError = (req: NextRequest) => new AppError({
    toastErrorType: "unauthorized", statusCode: 402
}).genResponse(null, req)
