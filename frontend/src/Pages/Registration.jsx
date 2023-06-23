

import { Box, FormErrorMessage, FormHelperText, Image, Select, useToast } from "@chakra-ui/react";
import cap from "../Image/1-removebg-preview.png"
import AOS from "aos"
import "aos/dist/aos.css"
import {
    Flex,

    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Link as Reactlink, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux"



import { register } from "../Redux/AuthReducer/action";
import { POST_REGISTER_ERROR, POST_REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";


export function Registration() {
  
    const [firstname, setfirstname] = useState("")
    const [isErrorname, setisErrorname] = useState(false)

    const [lastname, setlastname] = useState("")

    const [email, setemail] = useState("")
    const [isErroremail, setisErroremail] = useState(false)

    const [pass, setpass] = useState("")
    const [isErrorpass, setisErrorpass] = useState(false)

    const [age, setage] = useState("")


    const [nation, setnation] = useState("")
    const [isErrornation, setisErrornation] = useState(false)

    const toast = useToast()
    const navigate=useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    function handleclick() {

        if (firstname === "") {

            setisErrorname(true)
        }
        else if (email === "") {
            setisErroremail(true)
        }
        else if (pass === "") {
            setisErrorpass(true)
        }
        else if (nation === "") {
            setisErrornation(true)
        }
        else {

            let obj = {
                name: firstname + " " + lastname,
                email: email,
                pass: pass,
                age: age,
                nation: nation
            }

            dispatch(register(obj)).then((res) => {
                setisErroremail(false)
                setisErrorname(false)
                setisErrornation(false)
                setisErrorpass(false)
                dispatch({ type: POST_REGISTER_SUCCESS, payload: res.data })
                toast({
                    position: 'top-right',
                    title: 'Account has been Added',
                    description: "Please Login now !!",   
                    status: 'success',
                    duration: 4000,
                    isClosable: true,

                })
                navigate("/login")
                setfirstname("")
                setlastname("")
                setnation("")
                setage("")
                setemail("")
                setpass("")
            })
                .catch((err) => {
                    console.log(err.response.data.error)
                    if (err.response.data.error === "Invalid password. It should contain at least one number, one special character, and be at least 8 characters long.") {
                        setisErrorpass(true)
                    }
                    else if (err.response.data.error === "Email already exists, Please Login !!") {
                        setisErrorpass(false)
                        setisErroremail(false)
                        setisErrorname(false)
                        setisErrornation(false)

                        toast({
                            position: 'top-right',
                            title: 'This Account has Already Been Exists.',
                            description: "For further process, Please Login to your account again !!",
                            status: 'warning',
                            duration: 4000,
                            isClosable: true,

                        })
                        navigate("/login")

                    }
                    dispatch({ type: POST_REGISTER_ERROR })
                })

        }
    }
    return (<Box >
        {/* {isLoading?<LoadingBlack/>: */}
        <Box>
        
        <Box
            height={'250px'} backgroundColor={'black'}></Box>
        <Box >
            <Box data-aos="fade-left" position='relative' top='-100px' borderRadius={'10px'} left={'14%'} backgroundColor='#eef4fae6' width={'70%'} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image src={cap} width={{ base: '10%', md: '7%' }} m={'15px'} alt='' />
                    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=23&pause=1000&color=212121&repeat=false&width=445&lines=Register+to+Digitron." alt="Typing SVG" style={{marginTop:'2%'}} />
                </Box>
                <Box width={'90%'} m='auto'>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        pb='30px'
                    //   bg={useColorModeValue('gray.50', 'gray.800')}
                    >

                        <Stack width={'100%'} >
                            <Box
                                //   bg={useColorModeValue('white', 'gray.700')}
                                // boxShadow={'lg'}
                                p={8}>
                                <Stack data-aos="fade-left" spacing={9}>
                                    <Flex flexDirection={{ base: 'column', md: 'row' }} width={'100%'} justifyContent={'space-between'} >

                                        <Box width={{ base: '100%', md: '45%' }} >
                                            <FormControl id="firstName" isInvalid={isErrorname} isRequired>
                                                <FormLabel>First Name</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                                                {!isErrorname ? "" : (
                                                    <FormErrorMessage>Name is required.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                        <Box width={{ base: '100%', md: '45%' }}>
                                            <FormControl id="lastName">
                                                <FormLabel>Last Name</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />
                                            </FormControl>
                                        </Box>
                                    </Flex>
                                    <Flex width={'100%'} flexDirection={{ base: 'column', md: 'row' }} justifyContent={'space-between'} >
                                        <Box width={{ base: '100%', md: '45%' }} >
                                            <FormControl id="age" >
                                                <FormLabel>Number</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="Number" value={age} onChange={(e) => setage(e.target.value)} />
                                            </FormControl>
                                        </Box>
                                        <Box width={{ base: '100%', md: '45%' }} >
                                            <FormControl id="nation" isInvalid={isErrornation}>
                                                <FormLabel>Course/Stream</FormLabel>
                                                <Select backgroundColor={'#c1d6f3'} placeholder='Select option' value={nation} onChange={(e) => setnation(e.target.value)}>
                                                    <option value="MERN">MERN</option>
                                                    <option value="Node">Node</option>
                                                    <option value="Java">Java</option>
                                                    <option value="Others">Other</option>
                                       
                                                </Select>
                                                {!isErrornation ? "" : (
                                                    <FormErrorMessage>Nation is required.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                    </Flex>
                                    <Flex width={'100%'} direction={'column'} justifyContent={'space-between'} >
                                        <Box width={{ base: '100%', md: '65%' }} margin={'auto'}>
                                            <FormControl id="email" isInvalid={isErroremail} isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                                {!isErroremail ? (
                                                    <FormHelperText>
                                                        Enter the email you'd like to receive payment details.
                                                    </FormHelperText>
                                                ) : (
                                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                        <Box width={{ base: '100%', md: '65%' }} pt={'20px'} margin={'auto'}>
                                            <FormControl id="password" isInvalid={isErrorpass} isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="password" value={pass} onChange={(e) => setpass(e.target.value)} />
                                                {!isErrorpass ? (
                                                    <FormHelperText>
                                                        Password should contain atleast one number, one special character, and of atleast 8 characters long.
                                                    </FormHelperText>
                                                ) : (
                                                    <FormErrorMessage>Password should contain atleast one number, one special character, and of atleast 8 characters long.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>

                                    </Flex>

                                    <Stack spacing={10} >
                                        <Button
                                            width={{ base: '100%', md: '50%' }}
                                            margin={'auto'}

                                            size="lg"
                                            bg={'#263238'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }} onClick={handleclick}>
                                            Sign up
                                        </Button>
                                    </Stack>
                                    <Stack>
                                        <Text align={'center'}>
                                            Already a user? <Reactlink to="/login" ><span style={{ color: '#4299E1' }}>Login</span></Reactlink>
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </Box></Box>
        {/* } */}

    </Box>)
}


