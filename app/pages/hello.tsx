import { AlertTitle, Button, Container, Flex, Image, Spinner } from "@chakra-ui/react";
import axios from "axios";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Head from "next/head";


const Hello:NextPage = () => {
    const [cat,setCat] = useState()

    const [loading, setLoading] = useState(false)
    
    const catHandler = async () => {
        setLoading(true)
        const data = await axios("https://api.thecatapi.com/v1/images/search").then(res=>res.data[0].url)
        setLoading(false)
        return setCat(data)
       
    }
    useEffect(() => {
        catHandler()
    },[])
    return(
        <>
        <Head>
            <title>Cat page</title>
        </Head>
        <Flex h='100vh' justifyContent='center' alignItems='center' bgColor={'blackAlpha.900'}>
            <Flex display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                {loading? <Spinner thickness='4px' speed='0.65s'size='xl' emptyColor='gray.200' marginBottom='3rem' color='red'/>:<Image h='50vh' src={cat} />}
            <Button onClick={catHandler} colorScheme='orange' size='lg'>Get Random Kitty</Button>
            <Button marginTop='1rem' colorScheme='blue' size='lg'><Link href='/'>Home</Link></Button>
            </Flex>
        </Flex>
        </>
    )
    
}

export default Hello