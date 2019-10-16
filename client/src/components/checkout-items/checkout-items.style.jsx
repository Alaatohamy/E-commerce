import styled from "styled-components";

export const CheckoutTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  min-width: 600px;

  @media only screen and (max-width: 600px) {
    min-width: unset;
    margin-block-end: 20px;
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tbody tr {
      margin-block-end: 20px;
      border-block-end: 3px solid grey;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*Label the data*/
    td:nth-of-type(1):before {
      content: "Product";
    }
    td:nth-of-type(2):before {
      content: "Description";
    }
    td:nth-of-type(3):before {
      content: "Quantity";
    }
    td:nth-of-type(4):before {
      content: "Price";
    }
    td:nth-of-type(5):before {
      content: "Remove";
    }
  }
`;

export const CheckoutTableHead = styled.thead`
  border-bottom: 1px solid darkgray;
`;

export const CheckoutTh = styled.th`
  padding-bottom: 10px;
  font-weight: normal;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutTableFooter = styled.tfoot`
  font-weight: bold;
  text-align: right;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: normal;

  th,
  td {
    padding-top: 30px;
  }

  @media only screen and (max-width: 600px) {
    text-align: left;
    td:nth-of-type(1):before {
      content: "Total: ";
    }
  }
`;

export const CheckoutNoDataWrapper = styled.div`
  /* 100px is the header height + header margin-bottom */
  height: calc(100% - 100px);
  width: 100%;
  display: table;
`;

export const CheckoutNoData = styled.div`
  vertical-align: middle;
  display: table-cell;
  text-align: center;
  font-size: 35px;

  a {
    color: blue;
    font-weight: bold;
  }
`;
