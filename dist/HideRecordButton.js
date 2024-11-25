function p(o) {
	window.enmity.plugins.registerPlugin(o)
}
const r = window.enmity.modules.common.Constants;
window.enmity.modules.common.Clipboard, window.enmity.modules.common.Assets,
	window.enmity.modules.common.Messages, window.enmity.modules.common.Clyde,
	window.enmity.modules.common.Avatars, window.enmity.modules.common.Native;
const t = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage,
	window.enmity.modules.common.Toasts, window.enmity.modules.common.Dialog,
	window.enmity.modules.common.Token, window.enmity.modules.common.REST, window.enmity
	.modules.common.Settings, window.enmity.modules.common.Users;
const h = window.enmity.modules.common.Navigation;
window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack,
	window.enmity.modules.common.Theme;
const d = window.enmity.modules.common.Linking,
	f = window.enmity.modules.common.StyleSheet;
window.enmity.modules.common.ColorMap, window.enmity.modules.common.Components,
	window.enmity.modules.common.Locale, window.enmity.modules.common.Profiles,
	window.enmity.modules.common.Lodash, window.enmity.modules.common.Logger,
	window.enmity.modules.common.Flux, window.enmity.modules.common.SVG, window.enmity
	.modules.common.Scenes, window.enmity.modules.common.Moment;

function T(o) {
	return window.enmity.patcher.create(o)
}
var S = "HideRecordButton",
	u = "1.0",
	b = "Hide Record Button",
	v = [{
		name: "ryuya",
		id: "394875012365748920"
	}],
	F = "#8b0000",
	C = {
		name: S,
		version: u,
		description: b,
		authors: v,
		color: F
	};
const {
	components: e
} = window.enmity;
e.Alert, e.Button, e.FlatList;
const E = e.Image;
e.ImageBackground, e.KeyboardAvoidingView, e.Modal, e.Pressable, e.RefreshControl;
const I = e.ScrollView;
e.SectionList, e.StatusBar, e.StyleSheet, e.Switch;
const s = e.Text;
e.TextInput, e.TouchableHighlight, e.TouchableOpacity, e.TouchableWithoutFeedback,
	e.Touchable;
const w = e.View;
e.VirtualizedList, e.Form, e.FormArrow, e.FormCTA, e.FormCTAButton, e.FormCardSection,
	e.FormCheckbox, e.FormDivider, e.FormHint, e.FormIcon, e.FormInput, e.FormLabel,
	e.FormRadio;
const i = e.FormRow,
	R = e.FormSection;
e.FormSelect, e.FormSubLabel, e.FormSwitch, e.FormTernaryCheckBox, e.FormText,
	e.FormTextColors, e.FormTextSizes;

function c(o) {
	return window.enmity.assets.getIDByName(o)
}
const A = {
	byProps: (...o) => window.enmity.modules.filters.byProps(...o),
	byName: (o, n) => window.enmity.modules.filters.byName(o, n),
	byTypeName: (o, n) => window.enmity.modules.filters.byTypeName(o, n),
	byDisplayName: (o, n) => window.enmity.modules.filters.byDisplayName(o, n)
};

function N(...o) {
	return window.enmity.modules.bulk(...o)
}

function B(...o) {
	return window.enmity.modules.getByProps(...o)
}
window.enmity.modules.common;
const D = c("img_account_sync_github_white"),
	L = c("Discord"),
	P = c("img_account_sync_twitter_white"),
	x = B("acceptInviteAndTransitionToInviteChannel");
var k = ({
	settings: o
}) => {
	const n = f.createThemedStyleSheet({
		container: {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center"
		},
		image: {
			width: 70,
			height: 70,
			marginTop: 20,
			marginLeft: 20
		},
		title: {
			flexDirection: "column"
		},
		name: {
			fontSize: 30,
			paddingTop: 20,
			paddingLeft: 20,
			paddingRight: 30,
			color: r.ThemeColorMap.HEADER_PRIMARY
		},
		author: {
			fontSize: 15,
			paddingLeft: 50,
			color: r.ThemeColorMap.HEADER_SECONDARY
		},
		info: {
			height: 45,
			paddingTop: 3,
			paddingBottom: 3,
			justifyContent: "center",
			alignItems: "center"
		},
		footer: {
			color: r.ThemeColorMap.HEADER_SECONDARY,
			textAlign: "center",
			paddingTop: 10,
			paddingBottom: 20
		}
	});
	return t.createElement(I, null, t.createElement(w, {
		style: n.container
	}, t.createElement(E, {
		source: {
			uri: "https://avatars.githubusercontent.com/u/43488869"
		},
		style: n.image
	}), t.createElement(w, {
		style: n.title
	}, t.createElement(s, {
		style: n.name
	}, "HideRecordButton"), t.createElement(s, {
		style: n.author
	}, "by mafu"))), t.createElement(R, {
		title: "INFORMATION"
	}, t.createElement(i, {
		label: "Follow me on Twitter",
		style: n.info,
		trailing: i.Arrow,
		leading: t.createElement(i.Icon, {
			source: P
		}),
		onPress: () => {
			d.openURL("https://x.com/_ryuya_0124")
		}
	}), t.createElement(i, {
		label: "Visit my server for help",
		style: n.info,
		trailing: i.Arrow,
		leading: t.createElement(i.Icon, {
			source: L
		}),
		onPress: () => {
			x.acceptInviteAndTransitionToInviteChannel({
				inviteKey: "TrCqPTCrdq",
				context: {
					location: "Invite Button Embed"
				},
				callback: () => {
					h.pop()
				}
			})
		}
	}), t.createElement(i, {
		label: "Check Source on GitHub",
		style: n.info,
		trailing: i.Arrow,
		leading: t.createElement(i.Icon, {
			source: D
		}),
		onPress: () => {
			d.openURL("https://github.com/ryuya0124/HideRecordButton_pyoncord")
		}
	})), t.createElement(s, {
		style: n.footer
	}, `v${u}`))
};

function H(o, n, m) {
	return window.enmity.utilities.findInReactTree(o, n, m)
}
const y = T("HideRecordButton"),
	[M] = N(A.byName("ChatInput", !1)),
	_ = {...C, onStart() {
			y.after(M.default.prototype, "render", (o, n, m) => {
				let a = H(m, g => {
					var l;
					return (l = g.props) == null ? void 0 : l.canSendVoiceMessage
				});
				a && (a.props.canSendVoiceMessage = !1)
			})
		}, onStop() {
			y.unpatchAll()
		}, getSettingsPanel({
			settings: o
		}) {
			return t.createElement(k, {
				settings: o
			})
		}
	};
p(_);
