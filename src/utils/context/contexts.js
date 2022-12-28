import { createContext, useContext, useRef, useState } from 'react';
import { localhost } from '../../utils/axios/axios'
import jwt_decode from "jwt-decode";
import localStorage from '@react-native-async-storage/async-storage'
import Alert from "../alert"
import { useCallback, useMemo } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Keyboard, BackHandler, ToastAndroid, Dimensions } from "react-native";
import spacePrice from '../../utils/spacePrice';
import { courseIdValidator } from '../../utils/IdValidator';
import { truncate } from '../../utils/helpers';
import PropTypes from 'prop-types';


function State() {
  const _width = Dimensions.get('window').width;
  const _height = Dimensions.get('window').height;
  const [replaceInput, setreplaceInput] = useState(false)
  const [several, setseveral] = useState(0)
  const [severalTime, setseveralTime] = useState(5)
  const [severalShow, setseveralShow] = useState(true)
  const [totalTitle, settotalTitle] = useState([])
  const [star, setstar] = useState()
  const [showModal, setshowModal] = useState(false)
  const [timeChange, settimeChange] = useState(5)
  const [list, setlist] = useState([])
  const [splash, setSplash] = useState(true)
  const [showModalAvailabe, setshowModalAvailabe] = useState(false)
  const [sendMessage, setsendMessage] = useState(true)
  const [_list, set_list] = useState([])
  const [ass, setass] = useState(true)
  const [page, setpage] = useState(1)
  const [pageLimit] = useState(16)
  const [current, setcurrent] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [input, setinput] = useState('')
  const [height, setheight] = useState(_height)
  const [width, setwidth] = useState(_width)
  const [star1, setstar1] = useState(true)
  const [star2, setstar2] = useState(true)
  const [star3, setstar3] = useState(true)
  const [star4, setstar4] = useState(true)
  const [star5, setstar5] = useState(true)
  const [allstar, setallstar] = useState()
  const [message, setmessage] = useState('')
  const [showForm, setshowForm] = useState(false)
  const [token, settoken] = useState('')
  const [tokenValue, settokenValue] = useState({})
  const [myPhone, setmyPhone] = useState('')
  const [myCode, setmyCode] = useState('')
  const [captcha, setcaptcha] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [remember, setremember] = useState(60000 * 60 * 24 * 365)
  const [checkbox, setcheckbox] = useState()
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [info, setinfo] = useState('')
  const [code, setcode] = useState('')
  const [rand, setRand] = useState(parseInt(Math.random() * 9000 + 1000));
  const [showActivity, setshowActivity] = useState(false);
  const [showActivityHome, setshowActivityHome] = useState(true)
  const [$, set$] = useState()
  const [host] = useState(localhost)
  const useEffect = (call, state) => { useFocusEffect(useCallback(() => call(), state)) }
  const refInput = useRef()



  return {
    replaceInput, setreplaceInput,
    several, setseveral,
    sendMessage, setsendMessage,
    showModalAvailabe, setshowModalAvailabe,
    splash, setSplash,
    list, setlist,
    timeChange, settimeChange,
    showModal, setshowModal,
    star, setstar,
    totalTitle, settotalTitle,
    severalShow, setseveralShow,
    severalTime, setseveralTime,
    star5, setstar5,
    star4, setstar4,
    star3, setstar3,
    star2, setstar2,
    star1, setstar1,
    width, setwidth,
    height, setheight,
    input, setinput,
    currentPage, setcurrentPage,
    current, setcurrent,
    pageLimit,
    page, setpage,
    ass, setass,
    _list, set_list,
    checkbox, setcheckbox,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    password, setPassword,
    phone, setphone,
    email, setemail,
    fullname, setfullname,
    captcha, setcaptcha,
    myCode, setmyCode,
    myPhone, setmyPhone,
    tokenValue, settokenValue,
    token, settoken,
    showForm, setshowForm,
    message, setmessage,
    allstar, setallstar,
    refInput,
    useEffect,
    host,
    $, set$,
    showActivityHome, setshowActivityHome,
    showActivity, setshowActivity,
    rand, setRand,
    code, setcode,
    info, setinfo,
    imageUrl, setImageUrl,
    price, setprice,
    title, settitle,
    spacePrice, courseIdValidator, truncate, jwt_decode, localStorage, Alert, useEffect, useMemo, Keyboard, BackHandler, ToastAndroid, Dimensions,
  }
}
export const states = () => State()
export const contextStates = createContext(states);
export const context = () => useContext(contextStates)



export const propTypes = (component) => {
  component.propTypes = {
    // , phone: PropTypes.number
    // , star: PropTypes
    // , captcha: PropTypes.bool
    // , myCode: PropTypes.number
    // , token: PropTypes
    // , price: PropTypes.number
    // , code: PropTypes.number
    // , imageUrl: PropTypes.string
    showActivityHome: PropTypes.bool
    , showActivity: PropTypes.bool
    , severalTime: PropTypes.number
    , severalShow: PropTypes.bool
    , rand: PropTypes.number
    , useEffect: PropTypes.func
    , several: PropTypes.number
    , sendMessage: PropTypes.bool
    , showModalAvailabe: PropTypes.bool
    , splash: PropTypes.bool
    , list: PropTypes.array
    , timeChange: PropTypes.number
    , showModal: PropTypes.bool
    , replaceInput: PropTypes.bool
    , totalTitle: PropTypes.array
    , star5: PropTypes.bool
    , star4: PropTypes.bool
    , star3: PropTypes.bool
    , star2: PropTypes.bool
    , star1: PropTypes.bool
    , width: PropTypes.number
    , height: PropTypes.number
    , input: PropTypes.string
    , currentPage: PropTypes.number
    , current: PropTypes.array
    , pageLimit: PropTypes.number
    , page: PropTypes.number
    , ass: PropTypes.bool
    , checkbox: PropTypes.bool
    , remember: PropTypes.number
    , confirmPassword: PropTypes.string
    , password: PropTypes.string
    , email: PropTypes.string
    , fullname: PropTypes.string
    , myPhone: PropTypes.string
    , tokenValue: PropTypes.object
    , showForm: PropTypes.bool
    , message: PropTypes.string
    , allstar: PropTypes.number
    , host: PropTypes.string
    , info: PropTypes.string
    , title: PropTypes.string
  }
}







