import { getJwt } from "../../../helpers/auth";
import { callAPI } from "../../../helpers/network";
import { useHomeProvider } from "../HomeProvider";
import { useRouter } from "next/router";

const usePostItem = () => {

    const {push} = useRouter();
    const {loadPosts} = useHomeProvider();
    const handleRemove = async (postId) => {
        const confirmed = confirm('are you sure want to delete ?');
        if (confirmed) {
            await callAPI({
                url: `/posts/${postId}`,
                method: 'delete',
                headers: {
                    Authorization: `Bearer ${getJwt()}`
                }
            })
            await loadPosts();
        }
    }
    const handleEdit = async (postId) => {
        push(`/edit/${postId}`)
    }

    return {
        handleRemove,
        handleEdit
    }
}

export default usePostItem;