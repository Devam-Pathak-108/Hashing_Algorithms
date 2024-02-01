import { GetW_blocks } from "./components/GetW_Blocks"
import { convertToBlocks } from "./components/convertToBlock"

export const Computation= async(blocks:string[])=>{
    for ( var i of blocks){
    var M_blockOf32 = await convertToBlocks(i,32)
    var W_blocks = await GetW_blocks(M_blockOf32)
    }
}

