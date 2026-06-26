# Module 00 – Web Foundations

# Lesson 01 – What Happens When You Open a Website?

## 🎯 Learning Objectives

By the end of this lesson, I should be able to explain:

* What a URL is
* What HTTP and HTTPS are
* What a Domain Name is
* What an IP Address is
* What DNS is
* What an HTTP Request is
* What an HTTP Response is
* How a browser renders a webpage

---

# Why This Lesson Matters

Every web application, including my portfolio, depends on this process.

Understanding how a browser communicates with a server forms the foundation for learning React, Next.js, APIs, databases, and cloud deployment.

---

# Website Request Lifecycle

When a user enters:

https://mohangc.com

the following steps occur:

1. The browser reads and parses the URL.
2. It identifies the protocol (HTTPS), domain name (mohangc.com), and requested path.
3. The browser asks a DNS server for the IP address of the domain.
4. DNS returns the corresponding IP address.
5. The browser sends an HTTP request to that IP address.
6. The server processes the request.
7. The server sends an HTTP response.
8. The browser receives HTML, CSS, JavaScript, images, and other resources.
9. The browser renders the webpage on the screen.

---

# Request Flow Diagram

```text
User
 │
 ▼
Type URL
 │
 ▼
Browser
 │
 ▼
DNS Lookup
 │
 ▼
IP Address
 │
 ▼
HTTP Request
 │
 ▼
Server
 │
 ▼
HTTP Response
 │
 ▼
Browser Rendering
 │
 ▼
Webpage Appears
```

---

# Important Definitions

## URL

The address used to locate a resource on the Internet.

Example:

https://mohangc.com

---

## Protocol

A set of communication rules.

Examples:

* HTTP
* HTTPS

HTTPS is the secure version of HTTP.

---

## Domain Name

A human-readable website name.

Example:

google.com

---

## IP Address

A numerical address used by computers to identify each other on a network.

Example:

142.250.xxx.xxx

---

## DNS

DNS (Domain Name System) translates domain names into IP addresses so computers can locate servers.

---

## HTTP Request

A message sent by the browser asking the server for a resource.

---

## HTTP Response

The server's reply containing either:

* HTML
* CSS
* JavaScript
* Images
* JSON
* Error messages (404, 500, etc.)

---

# Real-Life Analogy

DNS is like the Contacts app on a phone.

Humans remember names like "Mohan" instead of phone numbers.

Similarly:

People remember:

google.com

Computers use:

142.250.xxx.xxx

DNS translates the human-friendly name into the machine-friendly address.

---

# What I Learned Today

* Browsers do not understand domain names directly.
* Computers communicate using IP addresses.
* DNS translates domain names into IP addresses.
* HTTP defines how browsers and servers communicate.
* Servers always return a response.
* Browsers render the returned resources into a visible webpage.

---

# Interview Questions

### Q1. What is DNS?

### Q2. Why do we need DNS?

### Q3. Explain the lifecycle of opening a website.

### Q4. What is the difference between an HTTP Request and an HTTP Response?

---

# My Teaching Summary

If I had to explain today's lesson to a beginner:

> DNS is like the Contacts app on a phone. We remember names, while phones use numbers. Similarly, humans remember domain names, while computers communicate using IP addresses. DNS translates between them.

---

# Key Takeaways

* Humans use domain names.
* Computers use IP addresses.
* DNS connects the two.
* HTTP enables browser-server communication.
* Every webpage starts with a request and ends with rendering.
