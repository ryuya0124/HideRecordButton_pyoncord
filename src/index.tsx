import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {React} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {bulk, filters} from "enmity/modules";
import {findInReactTree} from "enmity/utilities"

const Patcher = create('HideRecordButton')

const [
    ChatInput
] = bulk(
    filters.byName("ChatInput", false)
)

const HideRecordButton: Plugin = {
    ...manifest,
    onStart() {
        Patcher.after(ChatInput.default.prototype, 'render', (self, args, res) => {
            let obj = findInReactTree(res, r => r.props?.canSendVoiceMessage)
            if (obj) {
                obj.props.canSendVoiceMessage = false
            }
        })
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(HideRecordButton)
