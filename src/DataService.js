import React from 'react'
import MyList from "./MyList"
import Appbar from "./Appbar"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getInputBaseUtilityClass } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';
import { nanoid } from 'nanoid'


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { padding } from '@mui/system';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SaveIcon from '@material-ui/icons/Save';
import swal from 'sweetalert';
import Tooltip from '@material-ui/core/Tooltip';

import { FormGroup } from '@mui/material';
import { FormControlLabel, TextField, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox'
import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf'
import CircularProgress from '@material-ui/core/CircularProgress';

import { InputBase, Menu, Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { Button as Buttonstrap } from "reactstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const useStyles = makeStyles((theme) => ({
      typography: {
      padding: theme.spacing(2),
    },
    root: {
     
        margin: '1px',
        padding: '1px'
     
    },
    mystyletest:{
       textAlign: 'left'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    /* ---- */
    DropDownButton: {
        margin: "15px 15px",
        fontSize: "1.125rem",
        maxWidth: "fit-content",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid gray",
        borderRadius: "50px",
        color: "#000",
        backgroundColor: "white",
        cursor: "pointer",
        padding: "0px 20px",
      },
      inputRoot: {
        color: "inherit",
        width: "100%",
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        marginRight: "20px",
        marginLeft: 0,
        width: "100%",
        border: "1px solid grey",
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        border: "1px solid grey",
      },
      searchBarContainer: {
        minWidth: "inherit",
        display: "flex",
        justifyContent: "space-evenly",
        cursor: "default",
        "&.MuiListItem-button": {
          "&:hover": {
            backgroundColor: "white",
          },
        },
      },
      menuDivider: {
        margin: "0 20px",
      },
      dashboardSelectMenu: {
        "& .MuiPopover-paper": {
          minWidth: "380px",
          maxWidth: "fit-content",
        },
      },
      externalLinkIcon: {
        borderLeft: "1px solid var(--color-gray-eighty-five)",
        padding: "10px 0px 10px 10px",
        color: "var(--color-primary)",
        cursor: "pointer",
      },
      checkedItem: {
        color: "indigo",
      }, 

  
}));

const DataContext = React.createContext();


const DataService = (props) => {
    
    const classes = useStyles();
    /*    ----------------------------- */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchText, setSearchText] = React.useState("");
    const [selection, setSelection] = React.useState("");
    const [myoptions,setMyOptions] =React.useState([])
    const [dddisplay,setddDisplay]= React.useState(false)

    /*   --------------------------------*/

    const [keepproject,SetKeepproject] = React.useState(""); 
    const [proje,setProje] = React.useState([]); 
    const location = useLocation();

    
    
  //  console.log('location value is ',location.state);
    const mybearer = location.state.myAccessToken; 
    const myreceiveemail = location.state.myemail;

    const [myflag, setMyFlag] = React.useState(true)
    const [downflag, setDownFlag] = React.useState(true)

    const [checkleed,setCheckLeed] = React.useState(false)
    const [message, setMessage] = React.useState('');
    const [severity,setSeverity] = React.useState('');
    const [hidebutton,setHideButton] = React.useState(false)
    const [items, setItems] = React.useState(
        [
            {
                id : "0",
                item: "Integrative Process",
                details: [
                             {info : "Integrative Process",
                              listcheckbox : ["f","f","f","f","f"],
                              score : "0",
                              reasoncomment : "",
                              comment : "",
                              maxscore : "2",
                              option : "o",
                              popo:0 },
                                                    
                ],
                headscore: "2",      
             },
            {
               id : "1",
               item: "Location and Transportation",               
               details: [               
                            {info : "LEED for Neighborhood Development Location",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "18",
                             option : "o",
                             popo:1},
                            {info : "Surrounding Density and Diverse Uses",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "8",
                             option : "o",
                             popo:2 },
                            {info : "Access to Quality Transit",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "7",
                             option : "o",
                             popo:3 },
                            {info : "Bicycle Facilities",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:4 },
                            {info : "Reduce Parking Footprint",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:5 }
                           
               ],
               headscore: "18",      
            },
            {
               id : "2",
               item: "Water Efficiency",
               details: [               
                            {info : "Prerequisite: Indoor Water Use Reduction",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:6 },
                            {info : "Indoor Water Use Reduction",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "12",
                             option : "o",
                             popo:7 }                                               
                                                    
                ],
               headscore: "12",    
            },
            {
               id : "3",
               item: "Energy and Atmosphere",    
               details: [
                            {info : "Prerequisite: Fundamental Commissioning and Verification",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:8 },
                            {info : "Prerequisite: Minimum Energy Performance",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:9 },
                            {info : "Prerequisite: Fundamental Refrigerant Management",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:10 },
                            {info : "Enhanced Commissioning",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "5",
                             option : "o",
                             popo:11 },
                            {info : "Optimize Energy Performance",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "25",
                             option : "o",
                             popo:12 },
                            {info : "Advanced Energy Metering",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:13 },
                            {info : "Renewable Energy",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "3",
                             option : "o",
                             popo:14 },
                            {info : "Enhanced Refrigerant Management",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:15 },
                            {info : "Green Power and Carbon Offsets",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:16 }    
               ],
               headscore: "38",  
            },
            {
               id : "4",
               item: "Materials and Resources",
               details: [
                            {info : "Prerequisite: Storage and Collection of Recyclables",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:17 },
                            {info : "Prerequisite: Construction and Demolition Waste Management Planning",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:18 },
                            {info : "Long-Term Commitment",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:19 },
                            {info : "Interiors Life-Cycle Impact Reduction",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "4",
                             option : "o",
                             popo:20 },
                            {info : "Building Product Disclosure and Optimization - Environmental Product Declarations",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:21 },
                            {info : "Building Product Disclosure and Optimization - Sourcing of Raw Materials",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:22 },
                            {info : "Building Product Disclosure and Optimization - Material Ingredients",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:23 },
                            {info : "Construction and Demolition Waste Management",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:24 }
                            
               ],
               headscore: "13",
            },
            {
               id : "5",
               item: "Indoor Environment Quality",
               details: [
                            {info : "Prerequisite: Mimium Indoor Air Quality Performance",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:25 },
                            {info : "Prerequisite: Environmental Tobacco Smoke Control",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "0",
                             option : "r",
                             popo:26 },
                            {info : "Enhanced Indoor Air Quality Strategies",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:27 },
                            {info : "Low-Emitting Materials",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "3",
                             option : "o",
                             popo:28 },
                            {info : "Construction Indoor Air Quality Management Plan",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:29 },
                            {info : "Indoor Air Quality Assessment",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:30 },
                            {info : "Thermal Comfort",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:31 },
                            {info : "Interior Lighting",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:32 },
                            {info : "Daylight",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "3",
                             option : "o",
                             popo:33 },
                            {info : "Quality Views",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:34 },
                            {info : "Acoustic Performance",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "2",
                             option : "o",
                             popo:35 } 
                           
                            
               ],
               headscore: "17",      
            },
            {
               id : "6",
               item: "Innovation",
               details: [
                            {info : "Innovation",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "5",
                             option : "o",
                             popo:36 },
                            {info : "LEED Accredited Professional",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:37 },
                           
               ],
               headscore: "6", 
            },            
            {
               id : "7",
               item: "Regional Priority",
               details: [
                            {info : "Regional Priority: Specific -1",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:38 },
                            {info : "Regional Priority: Specific -2",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:39 },
                            {info : "Regional Priority: Specific -3",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:40 },
                            {info : "Regional Priority: Specific -4",
                             listcheckbox : ["f","f","f","f","f"],
                             score : "0",
                             reasoncomment : "",
                             comment : "",
                             maxscore : "1",
                             option : "o",
                             popo:41 }                           
               ],
               headscore: "4", 
            }              
          
        ]
    )
//    const allItem = items.data.items

    const ListItem = items.map(d =>(          
        
        <div key={d.id} className="boy">    
            <MyList 
                key={d.id}
                id={d.id}
                item={d.item}   
                details={d.details}
                headscore={d.headscore}  
            /> 
        
        </div>   
        
    )) 

    

/*========================================================================================================================== */    
    function writeGooglesheet(){
        
        const ArrKeepProject = keepproject.split(":"); //[project no,region,studio,projectname]
        // ES6 Destructuring assignment
        const [ProjectNumber,Region,Studio,ProjectName] = ArrKeepProject;

    //    console.log('ArrKeepProject ==> ',ArrKeepProject)
        const currDate = new Date();
        let strDate = currDate.toLocaleString();

        var axiosAppend = require('axios')
        const objItems = {...items}
    //    console.log("HELLO ",objItems) /*  */
      //  var dataRange = '{"values": [[' + "HELLO SHEET" + ']]' + ',"majorDimension": "ROWS"}'
        const myuid = nanoid();
        const mylink = `https://dwpservice.github.io/esgcomintedit/${myuid}`
        var dataRange = '{"values": [[' + "'" + JSON.stringify(objItems)  + "'" + 
                                        ',"' + myreceiveemail + '"' +  
                                        ',"' + ProjectNumber + '"' + 
                                        ',"' + Region + '"' + 
                                        ',"' + Studio + '"'  + 
                                        ',"' + ProjectName + '"' + 
                                        ',"' + strDate + '"' + 
                                        ',"'  + myuid + '"'  + 
                                        ',"N","Z"' +
                                        ',"' + mylink + '"'  +
                                    ']],"majorDimension": "ROWS"}'

        setMyFlag(false) //มีผลตอนเปิดฟอร์มครั้งแรก เพื่อซ่อนกรอบสีแดง ถ้าเป็น true แสดงว่ามี error
       /***************************************************************************/
       /*check row ที่เป็น require จะต้องมี note ถ้าไม่มีการ tick เลือก */

        let checkrequire = []
        let myidx = 0
        items.map(item =>  {
                                item.details.map((detail,idx) => {
                                    if (detail.option === "r"){
                                        if (detail.listcheckbox[0] === "f" && detail.reasoncomment === '') {
                                            checkrequire[myidx] = true 
                                        //    let xx = 'frame-' + detail.info
                                        //    document.getElementById(xx).style.borderColor = "red"
                                        //    document.getElementById(xx).style.borderWidth = "thin"
                                        //    document.getElementById(xx).style.borderStyle = "solid"

                                        }else{
                                             checkrequire[myidx] = false                                                
                                        }
                                        myidx++
                                    }
                                })    
                            })
        //check step ที่ require จะต้องมีการ tick ในช่องสีเขียว หรือมิฉะนั้นต้องใส่ comment จึงจะผ่านได้    
        let foundError = false
        for (var i=0;i < checkrequire.length;i++){
            if (checkrequire[i] === true){
                foundError = true
                break
            }else{
                foundError = false
            }
        }

            
        console.log("RESULT CHECKING ... true means found error ...",checkrequire)
        
        if (ProjectNumber !== "" && foundError === false){
            var configAppend = {
                method: 'post',
                url: 'https://sheets.googleapis.com/v4/spreadsheets/1wH4JcFpnmg1ULmjzOSqiev0c-aD-c_ghDQvpFNkDAsQ/values/Sheet1!A2:J2:append?valueInputOption=USER_ENTERED',
                headers: {
                    'Authorization':`Bearer ${mybearer}`, 
                    'Content-Type': 'text/plain'
                },
                data: dataRange
                }; 
    
                axiosAppend(configAppend) 
                .then(function (response){  
                        setSeverity("success");     
                        setMessage("Save changes to database completed!");  
                        setHideButton(true) 
                        swal("Success!","This form was saved in google sheet.","success")
                        .then((value)=>{
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }) 
                        });
                      
        //               console.log("success")   

                       window.location.reload(false)    
                //       window.location = "https://dwpservice.github.io/esgv2/#/app";   
                
                })
                .catch(function(error){
    //                console.log("failure")
                    console.log(error) 
                })  
                
        }else{
             swal("Error!","Please check you have completed all prerequisites and must select a project before saving.\nIf you do not meet prerequisites,\nplease provide explanation in the comment box","error");
        }

        

    }
/*============================================================================================================================== */  

    React.useEffect(()=>{
        fetch("https://docs.google.com/spreadsheets/d/1ZbfcpsSJAwhIUkqcHAU-k8s3wuBcoKfauiIfo5aTNkQ/gviz/tq?tqx=out:json&tq&gid=0")
        .then(resp => resp.text())
        .then(data => {
          //  console.log('data xxx ',data)
          //  const temp = data.substr(47).slice(0,-2);          
            const temp = data.substring(47).slice(0,-2);
            const json = JSON.parse(temp);
        //    console.log('GET DATA FROM - WFM Hubspot Google Data - use tabname -Integrate ',json.table.rows);
            const rows = json.table.rows;           
        //    console.log(rows)
            var finishArr = [];
            var myop = [{value:"Select a project...",label:"Select a project...",proj:"",projname:"",region:"",stu:""}];
          
            rows.forEach((row,index1,arr1)=>{                          
                 const studio = row.c[3] === null ? "" : row.c[3].v;
         //        console.log('studio ',studio)
                 const ourObj = {proj: `${row.c[0].v}`,projname: `${row.c[1].v}`, region: `${row.c[2].v}`, stu: studio }
                 finishArr.push(ourObj)   
                 myop.push({value: `${row.c[0].v}` + "---" + `${row.c[1].v}`,
                            label: `${row.c[0].v}` + "---" + `${row.c[1].v}`,
                            proj: `${row.c[0].v}`,
                            projname: `${row.c[1].v}`, 
                            region: `${row.c[2].v}`,
                            stu: studio
                        
                        }) 
            }) //forEach         
       //     console.log('finishArr is...',finishArr);       
          /* เก็บค่า project no,project name,region และ studio ในรูปแบบ arrray of object
             proje = [{proj: "xxxxx", projname: "xxxxxxxxx", region: "xxxxxxx", stu: "xxxxx"},{...},...] */
    //         console.log('myop ...',myop)
          setProje(finishArr) 
          setMyOptions(myop)
          setSelection(myop[0].label)
          setddDisplay(true)
 
          
        }) //dataAlert
     },[])   

    const samhandleChange = (event) => {
        //  setAge(event.target.value);
          console.log("AFTER CLICK PROJECT LIST ",event.target.value);
          SetKeepproject(event.target.value);
     
        };  
        const printRef = React.useRef()

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
     //   const data = canvas.toDataURL('image/png');

        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
       
        //One page pdf shows the canvas height generated by html pages
        var pageHeight = contentWidth / 592.28 * 841.89
        
        //html page height without pdf generation
        var leftHeight = contentHeight;
        //page offset
        var position = 0;
   
        //A4 paper size [595.8,841.89], html pagegerated canvas in pdf picture width
        var imgWidth = 595.28;
        var imgHeight = 592.28 / contentWidth * contentHeight ;
        var pageData = canvas.toDataURL('image/png');
        var pdf = new jsPDF("","pt","a4");
        //There are two heights to distinguish, one is the actual height of the html page, and the page height of the generated pdf (841.89)
        //When the content does not exceed the range of pdf page display, there is no need to paginate
        
        if (leftHeight < pageHeight){
            pdf.addImage(pageData, 'PNG', 0, 0, imgWidth, imgHeight);
        }else{
            while(leftHeight > 0){
               
                pdf.addImage(pageData, 'PNG', 0, position, imgWidth, imgHeight);
                leftHeight -= pageHeight;
               
                position -= 841.89;
                //Avoid adding blank pages
                if (leftHeight > 0){
                    pdf.addPage()
                }

            }
        }

        
        pdf.save(`esgv2-architecture.pdf`);
          
       
  
      };
/* ------------------------------------------- */
  

  const options = myoptions
  
  //   setSelection(options[0].label);
 
 
  

  const handleMenuOpen = (event) => {
    console.log('handleMenuOpen ...',event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    console.log('selection means the current value on dropdown before clicking to open menulist.')
    console.log('e.target.innerText...',e.target.innerText,'---','selecttion...',selection)

    var changeItemFormat = ""
    if (e.target.innerText !== selection && e.target.innerText !== "") {
      setSelection(e.target.innerText);
    }
    /******************************************/
    for (var i=0;i < myoptions.length;i++){
        if (myoptions[i].value === e.target.innerText) {
            changeItemFormat = myoptions[i].proj + ":" + myoptions[i].region + ":" + myoptions[i].stu + ":" + myoptions[i].projname
            break
        }
    }
    SetKeepproject(changeItemFormat)
    console.log('changeItemFormat ...',changeItemFormat)
    /******************************************/
    setSearchText("");
    setAnchorEl(null);
    
    

  };

  const handleSearchChange = (e) => {
    console.log('handleSearchChange ...',e.target.value)
    setSearchText(e.target.value);
    
  };
 
 // console.log('proje...',proje)
 
  
 // const options = myoptions
 // console.log('options ...',options)
 console.log('keepproject ==> ',keepproject)

function renderDashboardMenu() {
    const displayOptions = options
      .map((item) => {
    //       console.log(item.label.toLowerCase())
          if (item.label.toLowerCase().includes(searchText.toLowerCase())) {
          return item;
        }
      })
      .filter((item) => item !== undefined);

//      console.log('displayOptions ...',displayOptions)

    function renderOption(value) {
      if (selection === value) {
        return (
          <div className={classes.checkedItem}>
            <CheckIcon />
            {value}
          </div>
        );
      }
      return value;
    }

    return (
      <Menu
        anchorEl={anchorEl}
        keepMounted={true}
        open={!!anchorEl}
        onClose={handleClose}
        className={classes.dashboardSelectMenu}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 110, left: 240 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          className={classes.searchBarContainer}
          disableTouchRipple={true}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <i className="fas fa-search " />
            </div>
            <InputBase
              placeholder="SEARCH..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearchChange}
              value={searchText}
            />
          </div>
        </MenuItem>
        <Divider />
        {displayOptions.map((item, index) => {
          return (
            <div key={index}>
              <MenuItem onClick={(e) => handleClose(e)}>
                {renderOption(item.label)}
              </MenuItem>
              <Divider className={classes.menuDivider} />
            </div>
          );
        })}
      </Menu>
    );
}



/* -------------------------------------------- */

    return (
        
        <DataContext.Provider 
            value={{items,setItems,mybearer,myreceiveemail,checkleed,setCheckLeed,myflag,setMyFlag}}
        >
        
         <div ref={printRef}>
            <Appbar  />
            {dddisplay ? 
                <div>
                    <Buttonstrap
                        type="button"
                        className={classes.DropDownButton}
                        onClick={handleMenuOpen}
                    >
                    <Typography>
                        {selection}
                     </Typography>   
                        <KeyboardArrowDownIcon />
                    </Buttonstrap>
                    <Typography className="boy1">Please specific a project before fill out the form!</Typography> 
                    {renderDashboardMenu()}
                </div>  

            : null}
                
    {/* 
                <FormControl className={classes.formControl} style={{paddingLeft: "4px"}} onSubmit={ e=> {e.preventDefault()}}>
                    <InputLabel id="demo-simple-select-label"style={{paddingLeft: "4px",fontWeight:"600"}} >PROJECT NO.</InputLabel>
                        
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={keepproject}
                        onChange={samhandleChange}
                        
                    >
                    {
                        proje.map((item)=>(  
                                           
                            <MenuItem   key={item.proj+item.projname+item.region} 
                                        value={item.proj+':'+item.region+":"+item.stu+":"+item.projname}>{item.proj}-----{item.projname}
                            </MenuItem>
                           
                        ))
                    }    
                    
                    </Select>
                     
                    
                </FormControl>
    */}            
                
                <div className="flex-container">    
                 
                    {ListItem}   
                    
                </div>
                <Tooltip title={<div style={{fontSize: "16px",fontStyle:"normal"}}>Warning...If you want to download you must press this button before pressing submit button!</div>} >   
                    <Button     onClick={handleDownloadPdf} 
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                endIcon={<PictureAsPdfIcon />}
                                style={{width: "max-content",marginLeft: "15px",marginTop: "10px",marginBottom: "10px"}}
                                >
                        Download as PDF
                    </Button>        
                </Tooltip> 
                {!hidebutton ?
                    
                    <div className="MySubmitButton">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            style={{width: "max-content",marginBottom: "10px"}}
                            endIcon={<Icon>send</Icon>}
                            onClick={writeGooglesheet}
                        >
                            Submit
                        </Button>  
                    </div> 
                    
                :null}


            
         </div>
             
        </DataContext.Provider>

    
    )
}

export  {DataContext, DataService}