import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';


function SimpleDialog(props) {

  const { handleClose,  open ,compte} = props;
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <table className="table table-hover">
        <th scope="col">RIB</th>
        <th scope="col">Solde</th>
        <th scope="col">nature</th>
        <th scope="col">action</th>
        {compte.map((cpt, key) => {
          return (
            <tr key={key}>
              <td> {cpt.RIB} </td>
              <td>{cpt.soldeinitial}</td>
              <td>{cpt.nature}</td>

              <td>
                <button>Edit</button>
              </td>
            </tr>
          );
        })}
      </table>
    </Dialog>
  );
}

export default SimpleDialog;
