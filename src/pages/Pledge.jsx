import React from "react";
import Table from "../components/Table/Table";
import { connect } from "react-redux";

const Pledge = ({ txRecords }) => {
  const records =
    txRecords &&
    txRecords.filter((record) => record.transactionType === "New Pledge");

  return (
    <div>
      <Table transactions={records} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  txRecords: state.user.txRecords,
});

export default connect(mapStateToProps)(Pledge);
