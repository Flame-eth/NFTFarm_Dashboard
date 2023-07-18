import React from "react";
import Table from "../components/Table/Table";
import { connect } from "react-redux";

const Withdrawal = ({ txRecords }) => {
  const records =
    txRecords &&
    txRecords
      .filter(
        (record) =>
          record.transactionType !== "Stake Allowance" &&
          record.transactionType !== "New Pledge"
      )
      .splice(0)
      .reverse();

  // console.log(records);
  return (
    <div>
      <Table transactions={records} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  txRecords: state.user.txRecords,
});

export default connect(mapStateToProps)(Withdrawal);
