import DataLoader from "dataloader"
import { User } from "../../entities/User"

const batchGetUser = async (userIds : number[]) => {
    const users = await User.findByIds(userIds)
    return userIds.map(userId => users.find(user => user.id = userId))
}

export const buildDataloader = () => ({
    userLoader : new DataLoader<number , User | undefined >(userIds => batchGetUser(userIds as number[]))
})