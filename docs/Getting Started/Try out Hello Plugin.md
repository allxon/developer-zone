Allxon Octo SDK is implemented in **C++** and is available for 3<sup>rd</sup> party developers to build plugins to connect devices to Allxon Portal. By using Allxon Octo SDK, you can build your own application to enhance the management and usability of your devices on Allxon Portal. We call the application "**plugin**".

Let’s explore [Hello Plugin](https://github.com/allxon/plugIN-hello/releases) built by Allxon Octo SDK and learn what a plugin looks like.

## Requirements

Your device must come online on [Allxon Portal](https://dms.allxon.com/next/signin).

:::info

Following the steps below to get your device online on Allxon Portal:

1. Register an account on [**Allxon Portal**](https://dms.allxon.com/next/signin).
2. [Create a new sub-group](https://www.allxon.com/knowledge/create-sub-groups) naming as **Sandbox**.
3. Install [**Allxon Agent**](https://www.allxon.com/knowledge/install-allxon-agent-via-command-prompt) on your device.
4. Get a pairing code on your device. Then add your device to **Sandbox** group.
   :::

## Run Hello Plugin

### Download Plugin Package

Download the [Hello Plugin](https://github.com/allxon/plugIN-hello/releases) archive for your platform. We call this archive the "**plugin package**"; use the tab below that matches your operating system to continue.

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="Linux">

```bash
mkdir extracted_folder
tar -xf plugin-hello-X.X.X-linux-x86_64.tar.gz -C extracted_folder
```

</TabItem>
<TabItem value="cmd" label="Windows">

Hello Plugin on Windows is available with help from our team. For the package, extraction steps, and environment notes, please [contact us](https://www.allxon.com/contact).

</TabItem>
</Tabs>

:::caution Notice

Check your platform and CPU architecture. For Linux, we only tested on Ubuntu (> 18.04) and NVIDIA Jetson (> L4T R32.6.1 ). For Windows, please [contact us](https://www.allxon.com/contact) so we can assist with supported setups.

:::

And you will see an extracted folder hierarchy like this:

<Tabs>
<TabItem value="bash" label="Linux">

```
.
├── [APP_GUID]
│   ├── plugin-hello
│   ├── plugin_alert.json
│   ├── plugin_command_ack.json
│   ├── plugin_state.json
│   ├── plugin_update_template.json
│   └── uninstall_plugIN.sh
└── install_plugIN.sh

1 directory, 7 files
```

The **App GUID** represents this plugin's ID, `uninstall_plugIN.sh` and `install_plugIN.sh` are used to install and uninstall your plugin.

</TabItem>
<TabItem value="cmd" label="Windows">

The extracted layout on Windows matches the same plugin concepts (App GUID folder, JSON templates, installer scripts, and the plugin binary). For the exact file list in your build and how it maps to install/uninstall, please [contact us](https://www.allxon.com/contact).

</TabItem>
</Tabs>

:::tip

An **App GUID** corresponds to a plugin on a particular platform. If you need to deploy plugins on three platforms, you need to obtain different App GUIDs, each for the three respective platforms.

:::

### Execute Plugin

Next, you can manually execute the plugin.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
cd extracted_folder/[APP_GUID]
./plugin-hello $(pwd)
```

</TabItem>
<TabItem value="cmd" label="Windows">

To run Hello Plugin on Windows, we will walk you through the working directory, arguments, and any prerequisites. Please [contact us](https://www.allxon.com/contact).

</TabItem>
</Tabs>

### Install Plugin

Alternatively, you can install the plugin on your device through **Plugin Installer Script**. Once installed, the plugin starts automatically.

<Tabs>
<TabItem value="bash" label="Linux">

```bash
sudo allxon-cli plugin --app-guid <APP_GUID> install --package <PLUGIN_PACKAGE>

# For Example
sudo allxon-cli plugin --app-guid a8e873a1-e5df-43a2-928a-745ff9c94dfb install --package plugin-hello-X.X.X-linux-x86_64.tar.gz
```

</TabItem>
<TabItem value="cmd" label="Windows">

`allxon-cli` install options and the App GUID for your Windows package are provided when you work with Allxon. Please [contact us](https://www.allxon.com/contact) for the exact command line for your environment.

</TabItem>
</Tabs>

Yay~ 🥳 Now, you should see Hello Plugin online on your device page.

![screenshot_hello_plugin_finished](../_img/screenshot_hello_plugin_finished.png)

<!-- 2. Apply a `plugin_credential.json` of plugin from Allxon. -->
