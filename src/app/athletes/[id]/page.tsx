'use client';

import React from 'react';
import {

    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";
import CreationBlock from "@/app/components/block/CreationBlock";



export default function Page({ params }: { params: { id: string } }) {
    const athlete = params.id;

    return (
        <Tabs isFitted variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab>Blocks</Tab>
                <Tab>Create Blocks</Tab>
                <Tab>Data</Tab>
                <Tab>Details</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    one !
                </TabPanel>
                <TabPanel>
                    <CreationBlock athlete={athlete} />
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
