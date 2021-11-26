import React, { useEffect,useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import AgentListCard from "../../Components/AgentListCard/AgentListCard"
import {getAllAgent} from "../../JS/actions/agent"
import Loading from "../../Components/Loading/Loading"
const AgentList = () => {
    const [load, setload] = useState(true)
  const dispatch = useDispatch();
  const listAgent = useSelector((state) => state.accountReducer.agentList);
//   const load = useSelector((state) => state.accountReducer.load);

  // console.log(listAgent)
  useEffect(() => {
    dispatch(getAllAgent());
  }, []);
useEffect(() => {
  if (listAgent.data) {
    setload(false);
  }
  console.log(listAgent.data);
}, [listAgent]);

  return load ? (
    <Loading />
  ) : (
    <div>
      {listAgent.data.map((agent) => (
        <AgentListCard agent={agent} key={agent._id} />
        
      ))}
      
    </div>
  );
};
export default AgentList
