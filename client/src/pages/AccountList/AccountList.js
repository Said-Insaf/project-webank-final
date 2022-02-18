import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountListCard from "../../Components/AccountListCard/AccountListCard";
import { getAccounts } from "../../JS/actions/agent";
import Loading from "../../Components/Loading/Loading";
const AccountList = () => {
  const dispatch = useDispatch();

  const listAccount = useSelector((state) => state.accountReducer.accountList);
  // console.log(listAccount)
  // const load=useSelector(state=>state.accountReducer.load)
  const [load, setload] = useState(true);
  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);
  useEffect(() => {
    if (listAccount && listAccount.listUsers){
      setload(false)
    }
    //  setload(listAccount.listUsers.length==0)
  }, [listAccount]);
  return load ? (
    <Loading />
  ) : (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span className="white_text">Client</span>
                      </th>
                      <th>
                        <span className="white_text">RIB</span>
                      </th>
                      <th className="text-center">
                        <span className="white_text">Profession</span>
                      </th>
                      <th>
                        <span className="white_text">Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listAccount.listUsers.map((user) => (
                      <AccountListCard user={user} key={user._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountList;
