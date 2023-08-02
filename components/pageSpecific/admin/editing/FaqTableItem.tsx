"use client"
import { showToast } from "#/state/slices/ui";
import store from "#/state/store";
import { formatDate } from "#/utils/dates/dayjs";
import { Faq } from "@prisma/client";
import Link from "next/link";



const FaqTableItem = ({ item }: { item: Faq }) => {
    const copyLink = () => {
        navigator.clipboard.writeText(`/faqs/${item.id}`);
        store.dispatch(showToast({
            variant: "success",
            title: "Copied!",
            content: "The internal URL was copied to your clipboard.",
            timeout: 5000,
            isOpen: true
        }))

    }

    return (
        <tr>
            <td className="table-cell cursor-grab" onClick={copyLink}>{item.id}</td>
            <td className="table-cell">
                <Link href={`/admin/legit/faq?id=${item.id}`}>
                    {item.title}
                </Link>
            </td>
            <td className="table-cell">
                <Link href={`/admin/legit/faq?id=${item.id}`}>
                    {formatDate(item.createdAt)}
                </Link>
            </td>
            <td className="table-cell">
                <Link href={`/admin/legit/faq?id=${item.id}`}>
                    {formatDate(item.updatedAt)}
                </Link>
            </td>
        </tr>
    )
}


export default FaqTableItem
