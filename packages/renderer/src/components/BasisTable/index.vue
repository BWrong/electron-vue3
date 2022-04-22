<template>
  <div class="basic-table">
    <a-table bordered size="small" :row-key="rowKey" :columns="computedColumns" :pagination="pagination" v-bind="attrs">
      <template v-for="(item, key) in slots" #[key]="data">
        <slot :name="key" v-bind="data"></slot>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  name: 'BasicTable',
};
</script>
<script lang="ts" setup>
import type { ColumnGroupType, ColumnProps, ColumnType } from 'ant-design-vue/es/table';
import { computed, defineProps, useAttrs, useSlots } from 'vue';
interface IProps {
  rowKey?: string;
  showIndex?: boolean;
  columns: ColumnProps[];
  pagination?: IPage | false;
}
interface IPage {
  current?: number;
  pageSize?: number;
}
defineEmits(['change']);
const attrs = useAttrs();
const slots = useSlots();
const props = withDefaults(defineProps<IProps>(), {
  rowKey: 'id',
  showIndex: false,
  pagination: false as any
});
function ganerTableIndex(pageNow = 1, pageSize = 10, index = 0) {
  return (pageNow - 1) * pageSize + index + 1;
}
let computedColumns = computed<(ColumnGroupType<any> | ColumnType<any>)[]>(() => {
  // 判断是否需要显示序号
  if (!props.showIndex) return props.columns;
  let pagination = props.pagination || { current: 1, pageSize: 0 };
  let { current = 1, pageSize = 10 } = pagination as IPage;
  return [{ title: '序号', width: 80, customRender: ({ index }: { index: number }) => ganerTableIndex(current, pageSize, index), align: 'center' }, ...props.columns];
});
</script>
