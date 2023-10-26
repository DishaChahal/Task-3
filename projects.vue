<template>
    <div class="projects">
    <h1>My Projects</h1>
    <ul>
    <li>Project 1: A cool web app</li>
    <li>Project 2: Another awesome project</li>
    <li>Project 3: My personal blog</li>
    </ul>
    </div>
    </template>
    <script>
    export default {
    name: 'Projects',
    }
    </script>
    
    <style scoped>
    .projects {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    }
    h1 {
    font-size: 28px;
    margin-bottom: 10px;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    font-size: 16px;
    margin: 5px 0;
    }
    </style>