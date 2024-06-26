import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Script from "next/script";

import { useState, useEffect, useRef } from "react";

import Messages from "@/components/Messages";
import Input from "@/components/Input";
import Members from "@/components/Members";

function randomName() {
    const adjectives = [
        "autumn",
        "hidden",
        "bitter",
        "misty",
        "silent",
        "empty",
        "dry",
        "dark",
        "summer",
        "icy",
        "delicate",
        "quiet",
        "white",
        "cool",
        "spring",
        "winter",
        "patient",
        "twilight",
        "dawn",
        "crimson",
        "wispy",
        "weathered",
        "blue",
        "billowing",
        "broken",
        "cold",
        "damp",
        "falling",
        "frosty",
        "green",
        "long",
        "late",
        "lingering",
        "bold",
        "little",
        "morning",
        "muddy",
        "old",
        "red",
        "rough",
        "still",
        "small",
        "sparkling",
        "shy",
        "wandering",
        "withered",
        "wild",
        "black",
        "young",
        "holy",
        "solitary",
        "fragrant",
        "aged",
        "snowy",
        "proud",
        "floral",
        "restless",
        "divine",
        "polished",
        "ancient",
        "purple",
        "lively",
        "nameless",
    ];
    const nouns = [
        "waterfall",
        "river",
        "breeze",
        "moon",
        "rain",
        "wind",
        "sea",
        "morning",
        "snow",
        "lake",
        "sunset",
        "pine",
        "shadow",
        "leaf",
        "dawn",
        "glitter",
        "forest",
        "hill",
        "cloud",
        "meadow",
        "sun",
        "glade",
        "bird",
        "brook",
        "butterfly",
        "bush",
        "dew",
        "dust",
        "field",
        "fire",
        "flower",
        "firefly",
        "feather",
        "grass",
        "haze",
        "mountain",
        "night",
        "pond",
        "darkness",
        "snowflake",
        "silence",
        "sound",
        "sky",
        "shape",
        "surf",
        "thunder",
        "violet",
        "water",
        "wildflower",
        "wave",
        "water",
        "resonance",
        "sun",
        "wood",
        "dream",
        "cherry",
        "tree",
        "fog",
        "frost",
        "voice",
        "paper",
        "frog",
        "smoke",
        "star",
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

let drone = null;

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [members, setMembers] = useState([]);
    const [me, setMe] = useState({
        username: randomName(),
        color: randomColor(),
    });

    const messagesRef = useRef();
    messagesRef.current = messages;
    const membersRef = useRef();
    membersRef.current = members;
    const meRef = useRef();
    meRef.current = me;

    function connectToScaledrone() {
        drone = new window.Scaledrone("wMwEaeb0Gwobql4o", {
            data: meRef.current,
        });
        drone.on("open", (error) => {
            if (error) {
                return console.error(error);
            }
            meRef.current.id = drone.clientId;
            setMe(meRef.current);
        });

        const room = drone.subscribe("observable-room");
        room.on("message", (message) => {
            const { data, member } = message;
            setMessages([...messagesRef.current, message]);
        });
        room.on("members", (members) => {
            setMembers(members);
        });
        room.on("member_join", (member) => {
            setMembers([...membersRef.current, member]);
        });
        room.on("member_leave", ({ id }) => {
            const index = membersRef.current.findIndex((m) => m.id === id);
            const newMembers = [...membersRef.current];
            newMembers.splice(index, 1);
            setMembers(newMembers);
        });
    }
    useEffect(() => {
        if (drone === null) {
            connectToScaledrone();
        }
    }, []);

    function onSendMessage(message) {
        drone.publish({
            room: "observable-room",
            message,
        });
    }
    return (
        <>
            <Head>
                <title>Scaledrone Chat App</title>
                <meta name="description" content="Your brand-new chat app!" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <script
                    type="text/javascript"
                    src="https://cdn.scaledrone.com/scaledrone.min.js"
                    async
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.app}>
                <div className={styles.appContent}>
                    <Members members={members} me={me} />
                    <Messages messages={messages} me={me} />
                    <Input onSendMessage={onSendMessage} />
                </div>
            </main>
        </>
    );
}
