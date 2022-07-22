import SettingsLayout from '@/components/layout/SettingsLayout'
import { Sheet } from '@/components/Sheet'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Show = ({ id }) => {
    return (
        <SettingsLayout>
            <Sheet
                title={"asd"}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem accusamus incidunt, eveniet iste voluptatem voluptates fuga optio. Quis, illo. Doloremque necessitatibus odio eveniet ipsa provident incidunt asperiores porro sint!
            </Sheet>
        </SettingsLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
      props: {
        ...(await serverSideTranslations(context.locale ?? 'en', ['credential']))
      }
    };
  };
  
export default Show