import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

// Your project list
let list = [
    {
        index: "one",
        name: "Real-time chat system ",
        link: "https://github.com/Akito7011/eperimental-app",
        description: "To study the concept of real time messaging , i created an experimental project"
    },
    {
        index: "two",
        name: "Biometric Attendance System",
        link: "https://github.com/flamekiller22/cyberpe",
        description: "This project was made to prevent proxy attendance and get attendance of students through their fingerprints and face recognition using different Machine Learning techniques. My role was to secure the database and maintain the back-end for the Web Application."
    },
];

export default function Project() {
    return (
        <div style={{ minHeight: "75vh", paddingTop: "100px" }}>
            <Tabs defaultActiveKey={list[0].index} className="mb-3" fill>
                {list.map((item) => (
                    <Tab key={item.index} eventKey={item.index} title={item.name}>
                        <div className={'card'}>
                            <div className={'card-header'}>{item.name}</div>
                            <div className={'card-body p-5'}>
                                Description: {item.description}
                            </div>
                            <div className={'card-footer'}>
                                <a href={item.link} className={'btn btn-outline-dark'}>
                                    {item.name}
                                </a>
                            </div>
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
}
