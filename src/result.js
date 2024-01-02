import { useState } from "react";

function Result() {

    const init={
        name:'',
        rollno:'',
        s1:0,
        s2:0,
        s3:0,
        s4:0,
        s5:0
    }

    const [data,setdata]=useState(init)
    const [allData,setallData]=useState([])

    const [tot, settot] = useState();
    const [per, setper] = useState();

    const total = () => {
        // settot(parseInt(mat) + parseInt(sci) + parseInt(guj) + parseInt(eng) + parseInt(hin));
        // setper(parseFloat(tot) / 5);
    }

    return (
        <>
            <div className="result-bg">
                <div className="r-head">RESULT</div>
                <table>
                    <tr>
                        <td className="nam">Name :</td>
                        <td><input type="text" placeholder="Enter your Name" /></td>
                    </tr>
                    <tr>
                        <td className="nam">Roll No. :</td>
                        <input type="number" placeholder="00" />
                        <td></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Maths :</td>
                        <td><input type="number"  placeholder="00" /></td>
                    </tr>
                    <tr>
                        <td>Science :</td>
                        <td><input type="number"  placeholder="00" /></td>
                    </tr>
                    <tr>
                        <td>Gujrati :</td>
                        <td><input type="number"  placeholder="00" /></td>
                    </tr>
                    <tr>
                        <td>English :</td>
                        <td><input type="number"  placeholder="00" /></td>
                    </tr>
                    <tr>
                        <td>Hindi :</td>
                        <td><input type="number"  placeholder="00" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Get Total & Percentage - </td>
                        <td><button onClick={total}>Click</button></td>
                    </tr>
                    <tr>
                        <td> Total : </td>
                        <td><input type="text" value={tot} disabled /></td>
                    </tr>
                    <tr>
                        <td> Percentage : </td>
                        <td><input type="text" value={per} disabled /></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Result;