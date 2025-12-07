function WebWorking () {
  return (
    <>
      <h5>How Web Works:</h5>
      <ul>
        <li>
          When we open any website, the first call in network tab we see is the
          HTML fetch call. We can see the HTML skeletom in the Response. It
          loads all the CSS, JS files needed from a server. Client makes a
          request, and server responds with these assets.
          <br />
          → A server is a computer or a system that provides resources, data, or
          services to other computers, called clients, over a network. It can be
          a physical machine or software, and its function is to fulfill
          requests from clients, such as serving web pages, storing files, or
          handling email. This relationship is known as the client-server model.
          Our laptop, also can be a server, but it gets shut down, limited
          memory/resources etc.
          <br />
          → To get some food delivered at our place, we need an address/PIN code
          so that it helps to identify where the food has to be delivered.
          Similarly, our laptops, any device (IOT based too, fans, lights etc),
          network etc, has an IP Address. We need this, so we can reach out to
          any device on the internet.
          <br />
          → google.com, amazon.com etc, these are all domain names, but just by
          using a name we cannot reach to an address to fetch assets. It's like
          going to a post man and saying deliver this to Aditya, the post man
          would not be able to deliver it, we have not provided any address. And
          obviously, we do not remember our device's IP address.
          <br />
          → When we make a request, first it goes to the cell tower or WiFi
          router, that is, the Internet Provider (ISP). Then it goes to the DNS
          server, which provides with the IP for the destination (IP of
          google.com), it is like map where each domain is mapped with an IP
          address. The IP is then sent back to our device through the ISP, and
          then we hit the IP to reach the server (everything through ISP).
          <br />
          → We need a combination of wired and wireless system to create a
          network. Not everything can be wired (imagine just 10 devices
          connected by wires, each device receives 9 wires, one connection to
          each of the remaining 9 devices, 9 * 10 = 90, it becomes a hell), and
          not everything can be wireless (over long distance, fiber optic cables
          are needed, different factors affect wireless).
          <br />→ We therefore get optic fibre at home, office etc, which is
          then connected to a WiFi router so we can wirelessly connect through
          the router. There can be bigger routers, let's say, a router that is
          connected with the ISP and serves our locality, and this bigger router
          is then again via optic cables connected to the router in our home.
        </li>
        <li>
          DNS: We search the domain name, google.com, and get an IP address,
          192.124.109.80 etc. Every part of a domain ( https, www, .com, .in
          etc) has a lot of meaning and is needed while resolving/searching for
          it in the DNS server. Every part of the domain is used one by one to
          search the IP, like we search for a word in a dictionary.
          <br />
          → Root domain: The main part of a website's address, consisting of the
          domain name and its top-level domain (TLD) extension (such as
          example.com). It serves as the primary address for a website and is
          the foundation upon which all subdomains (like www.example.com) are
          built.
          <br />
          → Top Level Domain: The last part of a web address, located after the
          final dot, and it categorizes websites by purpose or location. Common
          examples include .com for commercial sites, .org for organizations,
          and country-specific ones like .in for India.
          <br />
          → Second Level Domain: The part of a domain name that comes directly
          before the top-level domain (TLD). It is the unique, selectable name
          for a website, such as "google" in google.com or "facebook" in
          facebook.com. The SLD identifies the website's owner, brand, or
          organization and is a key part of its online identity and
          memorability.
          <br />→ Third Level Domain: A sub-domain located before the
          second-level domain, used to organize a website's content. It is the
          part of a domain name to the left of the main domain, such as "blog"
          in blog.example.com. The "www" in a typical URL like www.example.com
          also serves as a third-level domain, although it is now often
          optional.
        </li>
        <li>
          Servers: We host a website somewhere (AWS etc), and they have their
          data centers, which then serves the website to us. Data centers have
          lots of machines that can handle these big loads of serving the
          website/its assets, and these machines are mapped to an IP. Also,
          internally these machines handle loading of specific paths (routes),
          like example.com/route1, like when our app is loaded and it starts to
          execute.
          <br />→ Data centers might be far away from our location, one way to
          connect it with can be wirelessly through satellite. But it comes with
          its own challenges, weather conditions, total distance travelled by
          data (data centers to satellite, satellite to us). This is where,
          optic cables come into picture. Lots of optical fibres are spread
          across the oceans, and some on land, to connect the
          countries/continents. Then we also the network towers in our areas to
          connect to.
        </li>
        <li>
          ISPs have network towers etc, but there are lot of rules, regulations
          and a complicated architecture about how ISPs work. ISPs can block
          some websites, interact with other ISPs and connect to the internet,
          there are lot of things involved in the ISPs environment.
          <br />→ There are local ISP's which provide us the the internet
          through towers or cables. These local ISP's are connected to regional
          ISP's, like for example one country having one regional ISP. Regional
          ISP's have control over many things like blocking etc, and the
          government etc, can have control over it. Then finally, we have global
          ISP's (governed by different authorities) which interacts with the
          regional ISP's and connects different countries or regional ISP's.
          Also, there are several global ISP's that are connected to each other.
        </li>
        <li>
          A data packet is a small, formatted unit of data sent over a network,
          like the internet, that contains the actual data (payload) and control
          information (header and trailer). It allows large files to be broken
          down for efficient and reliable transmission, with packets being
          reassembled at the destination. Each packet includes metadata like
          source and destination addresses and sequence numbers to ensure it
          arrives at the correct location and is put back in the right order.
          Data packets will hop over all of these different ISP's if we are
          fetching data lets say far away from another country, and may take
          different paths to reach us.
        </li>
        <li>
          Journey of a request:
          <br />→ Browser: Before even reaching router, browser checks in the
          cache for the requested URL, if in cache data is fetched from there,
          else request is forwarded. Also, service workers are checked.
          <br />
          A service worker is a script that runs in the background of a web
          browser, acting as a proxy between the browser, the network, and the
          web application. It enables advanced features like offline support,
          push notifications, and background sync. Service workers can intercept
          network requests and decide whether to serve a response from the cache
          or fetch it from the network, making applications more reliable and
          faster, especially on slow connections.
          <br />
          Next place is the operating system, which is checked for any cached
          data.
          <br />
          Now, the router is checked for any cached data, some routers maintain
          domain mappings and some other data.
          <br />
          Now, finally the ISP is reached which maintains a different type of
          data.
        </li>
        <li>
          At browser level, in the network tab, we can check from where each
          assest is being fetched (Service Worker etc). On hovering on the row,
          we can see different data like time to fetch from service worker etc.
          The 304 Not Modified status code in HTTP indicates that the requested
          resource has not been modified since the last time the client accessed
          it. This status code is part of the 3xx redirection category, but it
          is not a typical redirect that sends the client to a different URL.
          Instead, it serves as a caching mechanism to optimize web performance.
          <br />→ Web browsers implement a request queue mechanism to manage and
          prioritize network requests for resources like HTML, CSS, JavaScript,
          and images. This mechanism is crucial for optimizing page loading
          performance and ensuring efficient resource utilization. Browsers
          typically impose a limit on the number of concurrent TCP connections
          allowed to a single domain (origin). For HTTP/1.x, this limit is
          commonly around six connections. When more requests are initiated for
          the same domain than the allowed concurrent connections, subsequent
          requests are placed in a queue and "stalled" until a connection
          becomes available.
        </li>
        <li>
          → A peering network is a voluntary interconnection between two or more
          separate internet networks, like Internet Service Providers (ISPs), to
          exchange traffic directly. This allows data to flow more efficiently
          between their customers, bypassing third-party networks and often
          eliminating the need for payment between the networks (known as
          settlement-free peering). Direct connection: Peering creates a direct
          path for data between the networks involved. Basically, skipping these
          different ISP's and reducing the hops required.
          <br />→ ICANN (Internet Corporation for Assigned Names and Numbers) is
          a global, non-profit organization responsible for coordinating the
          unique identifiers of the internet, ensuring a stable, secure, and
          unified global network by managing IP address allocation, domain name
          system (DNS) root, and protocol parameters. It acts as a
          public-private partnership, overseeing the technical backbone of the
          internet's naming and numbering systems so users worldwide can find
          each other online using names (like google.com) or numbers (IP
          addresses). whois.com also maintains all the info about any domain and
          we can control what personal info we want to expose.
        </li>
        <li>
          TCP, or Transmission Control Protocol, is a core internet protocol
          that enables devices to reliably exchange data over a network by
          breaking it into packets and ensuring they are delivered in the
          correct order without errors. It establishes a connection before data
          transfer, uses acknowledgments to confirm delivery, and manages
          network congestion. TCP is a connection-oriented protocol, forming the
          basis of the modern Internet along with the Internet Protocol (IP).
          <br />
          → How TCP works Establishes a connection: Before sending data, TCP
          uses a three-way handshake (SYN, SYN-ACK, ACK) to create a reliable
          connection between the sender and receiver. Client sends a SYN, Server
          responds with a SYN-ACK, and then client responds back with an ACK.
          <br />
          → Segments data: It breaks large messages into smaller, manageable
          packets for transmission.
          <br />
          → Guarantees delivery: TCP numbers each packet and ensures they are
          reassembled in the correct order at the destination. It also
          retransmits any packets that are lost or corrupted.
          <br />
          → Manages flow control: TCP prevents a sender from overwhelming a
          receiver by adjusting the transmission rate based on the receiver's
          capacity.
          <br />
          → Controls congestion: It uses algorithms to manage network traffic
          and prevent congestion, ensuring efficient data flow.
          <br />
          → Terminates connection: A four-way handshake is used to properly
          close the connection once the data transfer is complete.
          <br />
          Key characteristics
          <br />
          → Connection-oriented: A connection must be established before data
          can be sent.
          <br />
          → Reliable: It guarantees that all packets will be delivered correctly
          and in order.
          <br />
          → Used with IP: TCP works with the Internet Protocol (IP) to send data
          across networks, forming the widely-used TCP/IP suite.
          <br />→ Application examples: It is used in applications that require
          reliable and ordered data, such as web browsing, email, and file
          transfers.
        </li>
        <li>
          An SSL/TLS handshake is a cryptographic process that establishes a
          secure communication channel between a client and a server, such as a
          web browser and a website. It involves a series of messages to
          authenticate each party, negotiate encryption algorithms, and generate
          shared session keys, which are then used to encrypt all subsequent
          data exchanged between them.
          <br />
          Key phases of an SSL handshake
          <br />
          → ClientHello: The client initiates the handshake by sending a message
          that includes the SSL/TLS versions it supports and a list of cipher
          suites it can use.
          <br />
          → ServerHello: The server responds with its chosen SSL/TLS version and
          cipher suite from the client's list. It also sends its digital
          certificate, which contains its public key and is verified by a
          Certificate Authority (CA).
          <br />
          → Authentication and Key Exchange: The client verifies the server's
          certificate. It then generates a pre-master secret, encrypts it using
          the server's public key, and sends it to the server.
          <br />
          → Session Key Generation: Both the client and server use the
          pre-master secret, along with other information exchanged during the
          handshake, to independently generate the same session keys. These
          session keys are used for symmetric encryption of the actual data
          transfer.
          <br />
          → Finished: Both client and server send a "Finished" message to
          confirm that the handshake was successful and the connection is now
          secure.
          <br />
          Why it's important
          <br />
          → Privacy: It ensures that the data exchanged between the client and
          server is scrambled (encrypted) so that it cannot be read by
          unauthorized parties.
          <br />
          → Data Integrity: It helps guarantee that the data has not been
          tampered with during transit.
          <br />→ Authentication: It verifies the identity of the server,
          ensuring that the client is communicating with the legitimate server
          and not an impostor.
        </li>
        <li>
          A 14 KB size data refers to the goal of loading a website's essential
          content within the first 10 TCP packets, which typically fit into
          about 14KB, to achieve extremely fast initial load times by avoiding
          extra network round trips, saving users significant waiting time,
          especially on slow connections. It's a key optimization for "critical
          rendering path", making the difference between a blank screen and
          meaningful content appear almost instantly by fitting initial HTML,
          CSS, and JS into this small window, leveraging TCP's slow start.
          <br />
          Why 14KB is significant:
          <br />
          → TCP Slow Start: The Transmission Control Protocol (TCP) starts by
          sending small amounts of data (initial window) and increases it.
          <br />
          → Packet Size: A standard network packet (MTU) is ~1500 bytes, with
          ~1460 bytes for data after headers.
          <br />
          → Round Trip: 10 packets * ~1460 bytes/packet ≈ 14,600 bytes or ~14KB.
          <br />→ The Benefit: If your initial content (above the fold) fits
          within 14KB, the browser gets enough to render something useful
          without waiting for more packets, saving a full network round trip
          (which can be slow).
        </li>
      </ul>
    </>
  )
}

export default WebWorking
