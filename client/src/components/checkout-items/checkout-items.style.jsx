import styled from "styled-components";

export const CheckoutTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
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
