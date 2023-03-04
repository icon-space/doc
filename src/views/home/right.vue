<template>
    <a-layout-sider class="layout-side-right" :width="272">
        <div class="download">
            <a-button type="primary">{{ $t('batchDownload') }}</a-button>
        </div>
        <div class="option">
            <a-form :model="option" layout="vertical">
                <a-form-item field="size" :label="$t('iconSize')">
                    <a-slider :min="12" :max="48" v-model="option.size" />
                    <a-input-number v-model="option.size" :min="12" :max="48" style="width: 90px; margin-left: 14px" />
                </a-form-item>
                <a-form-item field="strokeWidth" :label="$t('strokeWidth')">
                    <a-slider :min="1" :max="4" v-model="option.strokeWidth" />
                    <a-input-number v-model="option.strokeWidth" :min="1" :max="4" style="width: 90px; margin-left: 14px" />
                </a-form-item>
                <a-form-item field="theme" :label="$t('iconTheme')">
                    <a-space direction="vertical">
                        <a-radio-group v-model="option.theme">
                            <a-grid :cols="2" :rowGap="10" :colGap="10">
                                <a-grid-item>
                                    <a-radio value="outline">
                                        <template #radio="{ checked }">
                                            <a-tag
                                                :checked="checked"
                                                checkable
                                                bordered
                                                :color="checked ? 'blue' : ''"
                                                style="padding: 14px; width: 100px; display: flex; justify-content: center"
                                            >
                                                {{ $t('outline') }}
                                            </a-tag>
                                        </template>
                                    </a-radio>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-radio value="filled">
                                        <template #radio="{ checked }">
                                            <a-tag
                                                :checked="checked"
                                                checkable
                                                bordered
                                                :color="checked ? 'blue' : ''"
                                                style="padding: 14px; width: 100px; display: flex; justify-content: center"
                                            >
                                                {{ $t('filled') }}
                                            </a-tag>
                                        </template>
                                    </a-radio>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-radio value="two-tone">
                                        <template #radio="{ checked }">
                                            <a-tag
                                                :checked="checked"
                                                checkable
                                                bordered
                                                :color="checked ? 'blue' : ''"
                                                style="padding: 14px; width: 100px; display: flex; justify-content: center"
                                            >
                                                {{ $t('twoTone') }}
                                            </a-tag>
                                        </template>
                                    </a-radio>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-radio value="multi-color">
                                        <template #radio="{ checked }">
                                            <a-tag
                                                :checked="checked"
                                                checkable
                                                bordered
                                                :color="checked ? 'blue' : ''"
                                                style="padding: 14px; width: 100px; display: flex; justify-content: center"
                                            >
                                                {{ $t('multiColor') }}
                                            </a-tag>
                                        </template>
                                    </a-radio>
                                </a-grid-item>
                            </a-grid>
                        </a-radio-group>
                        <a-grid :cols="2" :rowGap="0" :colGap="10" class="theme-option">
                            <template v-if="option.theme === 'outline'">
                                <a-grid-item>
                                    <a-form-item field="colors.outline.fill" :label="$t('strokeColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.outline.fill"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.outline.fill" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                            </template>

                            <template v-if="option.theme === 'filled'">
                                <a-grid-item>
                                    <a-form-item field="colors.filled.fill" :label="$t('fillColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.filled.fill"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.filled.fill" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                            </template>

                            <template v-if="option.theme === 'two-tone'">
                                <a-grid-item>
                                    <a-form-item field="colors.twoTone.fill" :label="$t('strokeColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.twoTone.fill"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.twoTone.fill" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-form-item field="colors.twoTone.twoTone" :label="$t('fillColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.twoTone.twoTone"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.twoTone.twoTone" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                            </template>

                            <template v-if="option.theme === 'multi-color'">
                                <a-grid-item>
                                    <a-form-item field="colors.multiColor.outStrokeColor" :label="$t('outerStrokeColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.multiColor.outStrokeColor"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.multiColor.outStrokeColor" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-form-item field="colors.multiColor.outFillColor" :label="$t('outerFillColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.multiColor.outFillColor"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.multiColor.outFillColor" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-form-item field="colors.multiColor.innerStrokeColor" :label="$t('interStrokeColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.multiColor.innerStrokeColor"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.multiColor.innerStrokeColor" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                                <a-grid-item>
                                    <a-form-item field="colors.multiColor.innerFillColor" :label="$t('interFillColor')">
                                        <a-space>
                                            <ColorPicker v-model:hex="option.colors.multiColor.innerFillColor"></ColorPicker>
                                            <a-input size="mini" v-model="option.colors.multiColor.innerFillColor" />
                                        </a-space>
                                    </a-form-item>
                                </a-grid-item>
                            </template>
                        </a-grid>
                    </a-space>
                </a-form-item>
                <a-form-item field="endpoint" :label="$t('linecap')">
                    <a-radio-group v-model="option.strokeLinecap">
                        <a-grid :cols="3" :rowGap="10">
                            <a-grid-item>
                                <a-radio value="round">
                                    <template #radio="{ checked }">
                                        <a-tag :checked="checked" checkable bordered :color="checked ? 'blue' : ''" style="padding: 14px 28px">
                                            <IconSpace type="endpoint-round" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                                        </a-tag>
                                    </template>
                                </a-radio>
                            </a-grid-item>
                            <a-grid-item>
                                <a-radio value="butt">
                                    <template #radio="{ checked }">
                                        <a-tag :checked="checked" checkable bordered :color="checked ? 'blue' : ''" style="padding: 14px 28px">
                                            <IconSpace type="endpoint-flat" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                                        </a-tag>
                                    </template>
                                </a-radio>
                            </a-grid-item>
                            <a-grid-item>
                                <a-radio value="square">
                                    <template #radio="{ checked }">
                                        <a-tag :checked="checked" checkable bordered :color="checked ? 'blue' : ''" style="padding: 14px 28px">
                                            <IconSpace type="endpoint-square" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                                        </a-tag>
                                    </template>
                                </a-radio>
                            </a-grid-item>
                        </a-grid>
                    </a-radio-group>
                </a-form-item>
                <a-form-item field="strokeLinejoin" :label="$t('linejoin')">
                    <a-radio-group v-model="option.strokeLinejoin">
                        <a-grid :cols="3" :rowGap="10">
                            <a-grid-item>
                                <a-radio value="round">
                                    <template #radio="{ checked }">
                                        <a-tag :checked="checked" checkable bordered :color="checked ? 'blue' : ''" style="padding: 14px 28px">
                                            <IconSpace type="node-round" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                                        </a-tag>
                                    </template>
                                </a-radio>
                            </a-grid-item>
                            <a-grid-item>
                                <a-radio value="miter">
                                    <template #radio="{ checked }">
                                        <a-tag :checked="checked" checkable bordered :color="checked ? 'blue' : ''" style="padding: 14px 28px">
                                            <IconSpace type="node-flat" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                                        </a-tag>
                                    </template>
                                </a-radio>
                            </a-grid-item>
                            <a-grid-item>
                                <a-radio value="bevel">
                                    <template #radio="{ checked }">
                                        <a-tag :checked="checked" checkable bordered :color="checked ? 'blue' : ''" style="padding: 14px 28px">
                                            <IconSpace type="node-square" v-bind="DEFAULT_ICON_CONFIGS" :size="20" fill="currentColor"></IconSpace>
                                        </a-tag>
                                    </template>
                                </a-radio>
                            </a-grid-item>
                        </a-grid>
                    </a-radio-group>
                </a-form-item>
                <a-form-item>
                    <a-button @click="reset">{{ $t('reset') }}</a-button>
                </a-form-item>
            </a-form>
        </div>
    </a-layout-sider>
</template>

<script setup lang="ts">
import { DEFAULT_ICON_CONFIGS } from '@icon-space/vue-next'
import { IconSpace } from '@icon-space/vue-next/es/all'
import ColorPicker from 'colorpicker-v3' // 注册组件
import 'colorpicker-v3/style.css'
import useSiteStore from '../../stores/site'
import useOptionStore from '../../stores/option'

const site = useSiteStore()
const option = useOptionStore()

// 重置
const reset = () => {
    console.log('reset start')
    option.reset()
    console.log('reset end')
}
</script>

<style lang="scss">
.zs-color-picker {
    position: unset !important;
    .zs-color-picker-panel {
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
}

.theme-option {
    .arco-form-item-label {
        font-size: 12px !important;
    }
    .arco-input-size-mini {
        font-size: 12px !important;
    }
}

.layout-side-right {
    position: relative;
    height: calc(100vh - 60px);
    box-shadow: none;

    .download {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        border-bottom: 1px solid var(--color-border);
    }

    .option {
        height: calc(100vh - 120px);
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
    }
}
</style>
