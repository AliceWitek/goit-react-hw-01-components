import styled from "styled-components";

export const StatsSection=styled.section `
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 10px 0;
    `;

export const StatsTitle=styled.h2 `
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 30px 0;
    background-color: rgb(166, 242, 130);
    `;

export const StatLiCon=styled.ul `
    list-style: none;
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    `;

export const StatLi=styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 5);
    padding: 5px 0;
    `;

export const StatLab=styled.span `
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
    `;

export const StatPer=styled.span `
    width: 100%;
    text-align: center;
    `;
