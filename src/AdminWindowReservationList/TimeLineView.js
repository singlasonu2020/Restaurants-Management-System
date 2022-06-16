import React, { useEffect, useState } from "react";
import TimeLine from "./TimeLine";
import FloorNumberView from "./FloorNumberview"
import TableView from "./TableView";
import "../Styling/AdminWindowReservationList.css";

function TimeLineView() {
  const [Timing, SetTiming] = useState({
    StartTime: "07:30",
    EndTime: "23:30"
  });

  const TableData = [
    {
      FloorNumber: 1,
      FloorTableData: [
        {
          TBN: 1,
          capacity:7,
          BT: [
            {
              StartTimeHrs: "11",
              StartTimeMin: "15",
              EndTimeHrs: "14",
              EndTimeMin: "20",
              Name:"Sonu Singla",
              NumberOfGuest:4,
            },
            {
              StartTimeHrs: "16",
              StartTimeMin: "30",
              EndTimeHrs: "18",
              EndTimeMin: "00",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 2,
          capacity:8,
          BT: [
            {
              StartTimeHrs: "19",
              StartTimeMin: "30",
              EndTimeHrs: "21",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "21",
              StartTimeMin: "00",
              EndTimeHrs: "23",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           

          ]
        },
        {
          TBN: 3,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "10",
              StartTimeMin: "00",
              EndTimeHrs: "12",
              EndTimeMin: "30",
              Name:"Kmalesh Singla",
              NumberOfGuest:7,
            },
            {
              StartTimeHrs: "15",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 4,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "19",
              StartTimeMin: "30",
              EndTimeHrs: "21",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "21",
              StartTimeMin: "00",
              EndTimeHrs: "23",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           

          ]
        }
      ]

    },
    {
      FloorNumber: 2,
      FloorTableData: [
        {
          TBN: 5,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "10",
              StartTimeMin: "00",
              EndTimeHrs: "12",
              EndTimeMin: "30",
              Name:"Kmalesh Singla",
              NumberOfGuest:7,
            },
            {
              StartTimeHrs: "15",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 6,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "19",
              StartTimeMin: "30",
              EndTimeHrs: "21",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "21",
              StartTimeMin: "00",
              EndTimeHrs: "23",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           

          ]
        },
        {
          TBN: 7,
          capacity:7,
          BT: [
            {
              StartTimeHrs: "11",
              StartTimeMin: "30",
              EndTimeHrs: "14",
              EndTimeMin: "30",
              Name:"Sonu Singla",
              NumberOfGuest:4,
            },
            {
              StartTimeHrs: "16",
              StartTimeMin: "30",
              EndTimeHrs: "18",
              EndTimeMin: "00",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 8,
          capacity:8,
          BT: [
            {
              StartTimeHrs: "19",
              StartTimeMin: "30",
              EndTimeHrs: "21",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "21",
              StartTimeMin: "00",
              EndTimeHrs: "23",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           
            

          ]
        },
        {
          TBN: 9,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "11",
              StartTimeMin: "00",
              EndTimeHrs: "13",
              EndTimeMin: "30",
              Name:"Kmalesh Singla",
              NumberOfGuest:7,
            },
            {
              StartTimeHrs: "14",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 10,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "10",
              StartTimeMin: "30",
              EndTimeHrs: "13",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "15",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           

          ]
        }

      ]

    },
    {
      FloorNumber: 3,
      FloorTableData: [
        {
          TBN: 11,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "10",
              StartTimeMin: "00",
              EndTimeHrs: "12",
              EndTimeMin: "30",
              Name:"Kmalesh Singla",
              NumberOfGuest:7,
            },
            {
              StartTimeHrs: "15",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 12,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "19",
              StartTimeMin: "30",
              EndTimeHrs: "21",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "21",
              StartTimeMin: "00",
              EndTimeHrs: "23",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           

          ]
        },
        {
          TBN: 13,
          capacity:7,
          BT: [
            {
              StartTimeHrs: "11",
              StartTimeMin: "30",
              EndTimeHrs: "14",
              EndTimeMin: "30",
              Name:"Sonu Singla",
              NumberOfGuest:4,
            },
            {
              StartTimeHrs: "16",
              StartTimeMin: "30",
              EndTimeHrs: "18",
              EndTimeMin: "00",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 14,
          capacity:8,
          BT: [
            {
              StartTimeHrs: "19",
              StartTimeMin: "30",
              EndTimeHrs: "21",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "21",
              StartTimeMin: "00",
              EndTimeHrs: "23",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           
            

          ]
        },
        {
          TBN: 15,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "11",
              StartTimeMin: "00",
              EndTimeHrs: "13",
              EndTimeMin: "30",
              Name:"Kmalesh Singla",
              NumberOfGuest:7,
            },
            {
              StartTimeHrs: "14",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pinky Singla",
              NumberOfGuest:6,
            }

          ]
        },
        {
          TBN: 16,
          capacity:9,
          BT: [
            {
              StartTimeHrs: "10",
              StartTimeMin: "30",
              EndTimeHrs: "13",
              EndTimeMin: "00",
              Name:"Pankaj Sharma",
              NumberOfGuest:9,
            },
            {
              StartTimeHrs: "15",
              StartTimeMin: "00",
              EndTimeHrs: "16",
              EndTimeMin: "30",
              Name:"Pawan Singla",
              NumberOfGuest:7,
            }
           

          ]
        }

      ]

    }
    
    
  ]

  useEffect(()=>{
    document.getElementById("TimeLineViewReturnDiv").style.minWidth = `${(Timing.EndTime.substring(0,2)*1-Timing.StartTime.substring(0,2)*1)*90}px`;
  })

  return (
    <div id="TimeLineViewReturnDiv" className="TimeLineViewReturnDiv">

      <TimeLine color="White" Timing={Timing} />
      <div style={{overflowY:"auto"}}>
      {TableData.map(item=>FloorInsert(item,Timing))}
      </div>

    </div>
  )

}


function FloorInsert(FloorData,Timing)
{
  const ReturnArray = [];
  ReturnArray.push(<FloorNumberView FloorNumber={FloorData.FloorNumber}/>);
  const TablesData = FloorData.FloorTableData;
  console.log(TablesData);
  const color = ["rgb(255,255,255)","rgb(255,255,255,0.1)"];
  const TableInsertData = TablesData.map((item,index)=>TableInsert(item,Timing,color,index))
  return ReturnArray.concat(TableInsertData);

}


function TableInsert(TableData,Timing,color,index)
{
   return <TableView Timing={Timing} Data={TableData} color={color[index%2]} />
}
export default TimeLineView;