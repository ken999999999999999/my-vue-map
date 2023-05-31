<template>
  <div>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :row-key="rowKey"
      @update:checked-row-keys="handleCheck"
    />
  </div>
</template>

<script>
import { ref } from "vue"
import { NDataTable } from "naive-ui"

export default {
  props: {
    locations: {
      type: Array,
      required: true,
    },
  },
  components: { NDataTable },

  setup() {
    const checkedRowKeysRef = ref([])

    const columns = [
      { title: "", key: "isChecked" },
      {
        title: "Location",
        key: "name",
      },
    ]

    // const deleteSelected = () => {
    //   // Emit the delete event to the parent component
    //   context.emit(
    //     "delete",
    //     props.locations.filter((location) => location.isChecked)
    //   )
    // }

    return {
      columns,
      checkedRowKeys: checkedRowKeysRef,
      pagination: {
        pageSize: 5,
      },
      rowKey: (row) => row.address,
      handleCheck(rowKeys) {
        checkedRowKeysRef.value = rowKeys
      },
    }
  },
}
</script>
