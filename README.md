# The Blacklist filter for foreign IP addresses

This is a simple script to filter the incoming IP addresses on a big piece of text so they can be easily inserted on ZFC Proctor blocker.

## How can I use it?

Step 1: Download the repository on your place of preference and remember to install the dependencies:

```
npm install
```
Step 2: Copy on the clipboard the text you need to parse, for example this one:

```
//Copy this on your clipboard:
'unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'
```

Step 3: Run the script:

```
node blacklist
```
The output will be something like this:

```
Copied to the clipboard: 
[ '192.168.0.1', '1:2:3:4:5:6:7:8' ]
```

Now paste the content of your clipboard on Proctor and block the IP addresses. You can also simplify this by setting an alias on your system :)