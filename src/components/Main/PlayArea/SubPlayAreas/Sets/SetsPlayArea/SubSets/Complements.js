import React, { useState } from 'react';
import Input from '../../../Assets/Input/Input';
import Radio from '../../../Assets/Radio/Radio';
import PhiSymbol from './Symbols/PhiSymbol';
import UnionSymbol from './Symbols/UnionSymbol';

const Complements = (props) => {
    const { firstFinalSetArray, secondFinalSetArray } = props;
    const [universalOption, setUniversalOption] = useState('A⋃B');
    const options = ['A⋃B', 'R'];

    const getComplements = () => {

        const printAComplement = () => {

            // let printSet;
            // if (unionSet.length !== 0)
            //     printSet = <>
            //         {`{${unionSet.join(', ')}}`}
            //     </>;
            // else
            //     printSet = <><PhiSymbol /></>;

            // return printSet;
        }

        const printBComplement = () => {

            // let printSet;
            // if (unionSet.length !== 0)
            //     printSet = <>
            //         {`{${unionSet.join(', ')}}`}
            //     </>;
            // else
            //     printSet = <><PhiSymbol /></>;

            // return printSet;
        }

        return (
            <>
                {/* <Input>U:</Input> */}
                <div className="info">
                    What would be your universal set?
                </div>
                <Radio
                    options={options}
                    name="universal-options"
                    option={universalOption}
                    setOption={setUniversalOption}
                />
                <div className="result">
                    <div className="label">

                    </div>
                    {printAComplement()}
                </div>
                <div className="result">
                    <div className="label">

                    </div>
                    {printBComplement()}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="complements">
                <h2>Complements</h2>
                {getComplements()}
            </div>
        </>
    );
}

export default Complements;