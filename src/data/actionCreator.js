import { ActionTypes} from "./Types";
import Data from "./placeholderData.js";
var data = Data();
export const loadData = (dataType)=>
  ({
    type:ActionTypes.LOAD_DATA,
    payload:{
      dataType:dataType,
      data:data[dataType]
    }
  })
