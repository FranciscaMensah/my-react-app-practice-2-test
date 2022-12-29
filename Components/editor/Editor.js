import React from 'react';
import './Editor.css';
import {functions} from '../../functions';
import {HiOutlineCode, HiLink} from 'react-icons/hi';
import {ImStrikethrough} from 'react-icons/im';
import {BsImageFill} from 'react-icons/bs';
import {RiDoubleQuotesR} from 'react-icons/ri';
import {FaBold, FaItalic} from 'react-icons/fa';
import {BiHighlight} from 'react-icons/bi';
import {MdOutlineFormatListBulleted} from 'react-icons/md';
import {TbListCheck} from 'react-icons/tb';
import {AiOutlineOrderedList} from 'react-icons/ai';

export default function Editor(){
    const [text, setText] = React.useState('Type here');

    function handleChange (event){
        setText(event.target.value);
        console.log(text);
    }



    return (
        <div className='editor'>
            <div className='tools'>
                <div className='tabs'>
                    <button>Write</button>
                    <button className='btn-nude'>Preview</button>
                </div>
                <div className='wrapper-2'>
                    <button
                        className='btn-tool'>
                            <BiHighlight size='17'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <FaBold size='15'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <FaItalic size='15'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <ImStrikethrough size='15'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <HiLink size='17'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <RiDoubleQuotesR size='20'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <HiOutlineCode size='20'/>
                    </button>
                    <button
                        className='btn-tool'>
                            <BsImageFill size='16'/>
                    </button>
                </div>
            </div>
            <div className='wrapper-1'>
                <button className='btn-tool'>
                    <MdOutlineFormatListBulleted size='18'/>
                </button>
                <button className='btn-tool'>
                    <TbListCheck size='18'/>
                </button>
                <button className='btn-tool'>
                    <AiOutlineOrderedList size='18'/>
                </button>
            </div>
            <div>
                <textarea
                    value={text} 
                    onChange={handleChange}
                    className='text-area'></textarea>
            </div>

            <button onClick={functions.getText}>Get selected text</button>
        </div>
    )
}