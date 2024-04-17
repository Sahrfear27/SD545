import { User } from "./types"
export default interface searchResponse {
    isFirst:boolean,
    isLoading:boolean,
    isError:boolean,
     user:User[]
}