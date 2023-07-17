import React from "react";
import Table from "../components/Table/Table";
import { connect } from "react-redux";

const Withdrawal = ({ txRecords }) => {
  const records =
    txRecords &&
    txRecords.filter((record) => record.transaction === "withdrawal");

  console.log(records);
  return (
    <div>
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => ({
  txRecords: state.user.txRecords,
});

export default connect(mapStateToProps)(Withdrawal);
