class Solution:
    def displayTable(self, orders: List[List[str]]) -> List[List[str]]:
        table_orders = defaultdict(lambda: defaultdict(int))
        food_items = set()

        for customer, table, food in orders:
            table_orders[table][food] += 1
            food_items.add(food)

        sorted_food_items = sorted(food_items)
        sorted_tables = sorted(table_orders.keys(), key=lambda x: int(x))

        result = []

        header = ['Table'] + sorted_food_items
        result.append(header)

        for table in sorted_tables:
            row = [table]
            for food in sorted_food_items:
                row.append(str(table_orders[table].get(food, 0)))
            result.append(row)
        return result