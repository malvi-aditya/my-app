export default function NetworkProtocols () {
  return (
    <>
      <h5>Network Protocols:</h5>
      <ul>
        <li>
          Network protocols are a set of rules that govern how data is
          transmitted and received between devices on a network, acting as a
          common language for them to communicate effectively, securely, and
          reliably. They define aspects like data formatting, packet structure,
          addressing, and error checking, enabling devices with different
          software and hardware to exchange information seamlessly, a necessity
          for everything from local networks to the internet.
        </li>
        <li>
          HTTP (Hypertext Transfer Protocol) is a fundamental set of rules for
          transmitting data on the internet, forming the foundation of the World
          Wide Web. It operates on a client-server model, where a client (like a
          web browser) sends a request for a resource, and the server responds
          with the requested data, such as a web page, image, or video. This
          request-response interaction is how web browsers and servers
          communicate to display websites and other online content. HTTP makes a
          TCP connection first, then the actual request is made.
          <br />
          How it works:
          <br />
          → Client-Server Model: When you type a URL into your browser, your
          browser acts as the client and sends an HTTP request to the server
          hosting the website.
          <br />
          → Request and Response: The server receives the request and sends back
          an HTTP response, which contains the data needed to display the
          content on your screen.
          <br />
          → Data Transmission: HTTP transmits content like text, images, and
          video by using a suite of protocols called TCP/IP (Transmission
          Control Protocol/Internet Protocol).
          <br />
          → Purpose: Its main purpose is to enable the retrieval and publication
          of web pages and other resources, ensuring they load correctly for the
          user.
          <br />
          Key features and versions:
          <br />
          → Request Methods: HTTP uses various methods to define the purpose of
          a request, such as GET for retrieving data, POST for submitting data,
          and DELETE for removing data.
          <br />
          → Codes: The server's response includes a status code, like 200 for
          "OK" or 404 for "Not Found," to indicate the outcome of the request.
          <br />
          → Versions: HTTP has evolved over time, with recent versions like
          HTTP/1.1, HTTP/2, and the most recent HTTP/3, all offering
          improvements in performance and features.
          <br />
          → Security: HTTP vs. HTTPS: HTTP is not inherently secure. For a
          secure connection, the S in HTTPS (Hypertext Transfer Protocol Secure)
          indicates that the connection is encrypted using protocols like
          TLS/SSL.
          <br />→ Encrypted data: HTTPS protects the data being transmitted
          between your browser and the server, guarding against eavesdropping
          and tampering.
        </li>
        <li>
          UDP (User Datagram Protocol): It is a fast, connectionless internet
          protocol for simple, low-latency data exchange where reliability isn't
          critical, unlike TCP. It sends data (datagrams) without establishing a
          connection or guaranteeing delivery, making it ideal for real-time
          applications like streaming, online gaming, VoIP, and DNS lookups,
          where speed outweighs losing an occasional packet. Its minimal
          overhead comes from lacking features like acknowledgments, flow
          control, and ordered delivery.
          <br />
          Key Characteristics:
          <br />
          → Connectionless: No handshake is needed before sending data.
          <br />
          → Unreliable: No guarantees for delivery, order, or duplicate
          protection.
          <br />
          → Low Overhead: Small header (8 bytes) and minimal processing, making
          it fast.
          <br />
          → Best-Effort Delivery: Sends data without confirmation.
          <br />
          → No Flow/Error Control: Can overwhelm slow receivers, but allows high
          speeds.
          <br />
          How it Works (Simplified):
          <br />
          → Data Encapsulation: Application data gets a lightweight UDP header
          (source/destination ports, length, checksum).
          <br />
          → IP Layer: The UDP datagram is passed to the IP layer for routing.
          <br />
          → Transmission: Sent directly to the destination without prior setup.
          <br />
          → Receiver: Data is processed; if a packet is lost, it's simply gone
          (unless application-level recovery is built).
          <br />
          Common Uses:
          <br />
          → Streaming Media: Video/audio where dropped frames are better than
          buffering.
          <br />
          → Online Gaming: For real-time player positions and actions.
          <br />
          → VoIP: Voice over IP calls.
          <br />
          → DNS (Domain Name System): Fast small queries.
          <br />
          → DHCP, NTP: Network management protocols needing quick exchanges.
          <br />
          UDP vs. TCP (Transport Layer Comparison):
          <br />
          → TCP (Transmission Control Protocol): Connection-oriented, reliable,
          ordered, slower (handshake, acknowledgments, retransmissions).
          <br />→ UDP (User Datagram Protocol): Connectionless, unreliable,
          faster (minimal overhead).
        </li>
        <li>
          HTTP/3 is the third major version of the Hypertext Transfer Protocol,
          which uses the QUIC protocol over UDP instead of TCP, resulting in
          faster speeds, lower latency, and improved security. Key improvements
          include faster connection establishment, built-in encryption with TLS
          1.3, and the elimination of "head-of-line blocking" issues that could
          slow down HTTP/2 connections. This allows for more reliable
          connections, especially on mobile devices or with poor network
          conditions.
          <br />
          Key features of HTTP/3 Uses QUIC transport:
          <br />
          → Unlike previous versions that relied on TCP, HTTP/3 is built on
          QUIC, a new transport protocol that runs on UDP.
          <br />
          → Reduced latency: QUIC combines the transport and cryptographic
          handshakes, speeding up the connection establishment process compared
          to TCP.
          <br />
          → Eliminates head-of-line blocking: QUIC solves a major limitation of
          TCP where a single packet loss can stall the entire connection.
          <br />
          → Improved security: TLS 1.3 is integrated by default at the transport
          layer, meaning all traffic, including headers, is encrypted, which
          enhances security.
          <br />
          → Connection migration: QUIC allows for seamless connection migration
          between different IP addresses or networks, which is beneficial for
          mobile users.
          <br />
          → More flexible prioritization: HTTP/3 has more efficient and flexible
          stream prioritization compared to HTTP/2.
          <br />
          → Built for performance: HTTP/3 was developed to address the growing
          demand for faster and more efficient web communication, especially for
          streaming media and interactive applications.
          <br />
          How it works:
          <br />→ HTTP/3 provides the same fundamental functions as previous
          versions, like fetching web resources, but the underlying transport
          protocol has been re-engineered for better performance. Web browsers
          and servers can negotiate and use HTTP/3 seamlessly. The change
          requires no modifications to website code. Websites like Google,
          YouTube, and Cloudflare already use HTTP/3 to serve content to their
          users. It does header compression,
        </li>
        <li>
          The Simple Mail Transfer Protocol (SMTP) is the standard
          application-layer protocol for sending and relaying email messages
          across the internet, acting as the core mechanism for email delivery
          between servers and clients, using commands like HELO, MAIL, and RCPT
          TO over TCP/IP, typically on ports 25, 465, or 587, often secured with
          TLS/SSL for confidentiality (SMTPS). It handles the "push" of mail,
          while protocols like POP3/IMAP manage retrieval, ensuring reliable
          delivery through server-to-server hops (relay) or direct delivery.
          <br />
          How SMTP Works Connection:
          <br />
          → Your email client (e.g., Outlook, Gmail app) connects to your mail
          server (SMTP server) via TCP/IP.
          <br />
          → Handshake: Commands like HELO/EHLO identify the client, MAIL FROM
          specifies the sender, and RCPT TO identifies the recipient.
          <br />
          → Data Transfer: The DATA command sends the actual email content.
          <br />
          → Relaying: If the recipient's server isn't direct, the email is
          passed to intermediary SMTP servers until it reaches the destination.
          <br />
          → Delivery: The recipient's server receives the message, making it
          available for their email client to retrieve (using POP3/IMAP).
          <br />
          Key Components & Concepts
          <br />
          → Application Layer: Operates at the top of the TCP/IP stack.
          <br />
          → TCP/IP: Uses Transmission Control Protocol (TCP) for reliable,
          ordered delivery.
          <br />
          → Ports: Standard ports include 25 (unsecured), 587 (submission), and
          465 (SMTPS).
          <br />
          → SMTPS/STARTTLS: Secures SMTP with TLS/SSL encryption for privacy and
          integrity.
          <br />
          → MIME: Used alongside SMTP to handle complex email features like
          attachments, HTML, and non-English characters.
          <br />
          Common SMTP Commands
          <br />
          → HELO/EHLO: Greet the server.
          <br />
          → MAIL FROM: Define sender.
          <br />
          → RCPT TO: Define recipient(s).
          <br />
          → DATA: Start sending message body.
          <br />
          → QUIT: End the session.
          <br />
          Why it's Important
          <br />→ SMTP is fundamental for all email, enabling everything from
          personal messages to bulk marketing, acting as the universal language
          for mail servers to "talk" to each other.
        </li>
        <li>
          FTP (File Transfer Protocol) is a standard network protocol for
          transferring files between a client and server over a TCP-based
          network, using separate connections for commands (port 21) and data
          (port 20), enabling tasks like uploading, downloading, and managing
          files, though modern usage often favors more secure versions like FTPS
          or SFTP due to FTP's plaintext security.
          <br />
          How it Works
          <br />
          → Client-Server Model: An FTP client (like FileZilla) connects to an
          FTP server to request or send files, working on a client-server
          architecture.
          <br />
          → Two Connections: It uses two TCP connections: a Control Connection
          (Port 21) for commands (login, get, put) and a Data Connection (Port
          20 in Active Mode) for the actual file transfer.
          <br />
          → Authentication: Requires a username and password, though anonymous
          FTP allows public access without credentials.
          <br />
          → Modes: Operates in Active or Passive modes, depending on which side
          initiates the data connection.
          <br />
          Key Features & Uses:
          <br />
          → Reliable File Transfer: Efficient for moving large files across
          different operating systems.
          <br />
          → File Management: Allows for listing, deleting, renaming, and moving
          files.
          <br />
          → Applications: Used for website uploads, software distribution, data
          backups, and general file sharing.
          <br />
          Security Concerns & Alternatives
          <br />
          → Insecure by Default: Standard FTP sends credentials and data in
          plaintext, making it vulnerable.
          <br />→ Secure Alternatives: FTPS (FTP Secure): Adds SSL/TLS
          encryption to FTP. SFTP (SSH File Transfer Protocol): Uses SSH for a
          single, encrypted connection, often more firewall-friendly.
        </li>
      </ul>
    </>
  )
}
