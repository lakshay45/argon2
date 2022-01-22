import React, { useEffect, useState } from "react";
import "./ListPage.css";
const ListPage=()=>{

    const [data,setData]=useState({});
    useEffect(()=> {
        fetch("https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            })
    },[]);
    const call=()=>{
        
        fetch("https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            });
    }
    return (
    <>
        <div className="listPage">
            <div className="headingList">
                <h3>Light table</h3>
            </div>
            <div className="theadRow">
                <div className="theadRowContent">
                    NAME
                </div>
                <div className="theadRowContent">
                    COMPANY
                </div>
            </div>
            <div className="ListDiv">
            {
                data && data.clients && data.clients.map((item) => (
                    <div className="List">
                        <div className="theadRowContent">
                            {item.name}
                        </div>
                        <div className="theadRowContent">
                            {item.company}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </>
    );
}

export default ListPage;
