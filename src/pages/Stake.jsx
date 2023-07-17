import React from "react";
import Table from "../components/Table/Table";
import { connect } from "react-redux";

const Stake = ({ txRecords }) => {
  // console.log(txRecords);
  const records =
    txRecords &&
    txRecords.filter((record) => record.transactionType === "Stake Allowance");
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

export default connect(mapStateToProps)(Stake);
