import { before } from "@vendetta/patcher";
import { findByName } from "@vendetta/metro";

// ChatInputコンポーネントを取得
const ChatInput = findByName("ChatInput", false);

let unpatch;

export const onLoad = () => {
    // ChatInputのrenderメソッドにパッチを適用
    unpatch = before("render", ChatInput.default.prototype, (args, instance) => {
        // canSendVoiceMessageプロパティを無効化
        const voiceButtonProp = instance.props?.canSendVoiceMessage;
        if (voiceButtonProp) {
            instance.props.canSendVoiceMessage = false;
        }
    });
};

export const onUnload = () => {
    // パッチの解除
    if (unpatch) unpatch();
};
