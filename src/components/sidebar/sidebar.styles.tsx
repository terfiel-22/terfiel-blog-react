import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 30%;
  float: left;
  height: 300px;

  .section {
    background: white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;

    .section-title {
      margin: 10px 0px;
    }

    &.search {
      margin-top: 80px;
    }

    &.topics {
      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;

        li:first-child a {
          border-top: 1px solid #e0e0e0e0;
        }

        li a {
          border-bottom: 1px solid #e0e0e0e0;
          display: block;
          padding: 15px 0px;
          transition: all 0.3s;

          &:hover {
            padding-left: 10px;
          }
        }
      }
    }
  }
`;
