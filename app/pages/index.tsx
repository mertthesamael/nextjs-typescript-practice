import { Button, Container, Flex } from '@chakra-ui/react'
import type { NextPage } from "next"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home:NextPage = (test) => {
  
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Flex bgColor={'darkcyan'} h='100vh' justifyContent='center' alignItems='center'>
      <Button size='lg'>
      <Link href='/hello'>Epic Cat Page</Link>
      </Button>
    </Flex>
    </>
  )
}


export default Home