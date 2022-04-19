// +----------------------------------------------------------------------
// | EasyGoAdmin敏捷开发框架 [ EasyGoAdmin ]
// +----------------------------------------------------------------------
// | 版权所有 2019~2022 EasyGoAdmin深圳研发中心
// +----------------------------------------------------------------------
// | 官方网站: http://www.easygoadmin.vip
// +----------------------------------------------------------------------
// | Author: @半城风雨
// +----------------------------------------------------------------------
// | 免责声明:
// | 本软件框架禁止任何单位和个人用于任何违法、侵害他人合法利益等恶意的行为，禁止用于任何违
// | 反我国法律法规的一切平台研发，任何单位和个人使用本软件框架用于产品研发而产生的任何意外
// | 、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其造成的损失 (包括但不限于直接、间接、附带
// | 或衍生的损失等)，本团队不承担任何法律责任。本软件框架只能用于公司和个人内部的法律所允
// | 许的合法合规的软件产品研发，详细声明内容请阅读《框架免责声明》附件；
// +----------------------------------------------------------------------

/**
 * 广告管理
 * @author 半城风雨
 * @since 2021/7/26
 */
layui.use(['func'], function () {

    //声明变量
    var func = layui.func
        , form = layui.form
        , $ = layui.$;

    if (A == 'index') {
        //【TABLE列数组】
        var cols = [
              {type: 'checkbox', fixed: 'left'}
            , {field: 'id', width: 80, title: 'ID', align: 'center', sort: true, fixed: 'left'}
            , {field: 'title', width: 200, title: '广告标题', align: 'center'}
            , {field: 'description', width: 200, title: '广告描述', align: 'center'}
            , {field: 'type', width: 100, title: '广告格式', align: 'center', templet(d) {
                    var cls = "";
                    if (d.type == 1) {
                        // 图片
                        cls = "layui-btn-normal";
                    } else if (d.type == 2) {
                        // 文字
                        cls = "layui-btn-danger";
                    } else if (d.type == 3) {
                        // 视频
                        cls = "layui-btn-warm";
                    } else if (d.type == 4) {
                        // 推荐
                        cls = "layui-btn-primary";
                    }
                    return '<span class="layui-btn ' + cls + ' layui-btn-xs">'+d.typeName+'</span>';
                }}
            , {field: 'cover', width: 100, title: '广告图片', align: 'center', templet: function (d) {
                    var cover = "";
                    if (d.cover) {
                        cover = '<a href="' + d.cover + '" target="_blank"><img src="' + d.cover + '" height="26" /></a>';
                    }
                    return cover;
                }
            }
            , {field: 'adSortDesc', width: 200, title: '广告位描述', align: 'center'}
            , {field: 'status', width: 100, title: '状态', align: 'center', templet: function (d) {
                    return  '<input type="checkbox" name="status" value="' + d.id + '" lay-skin="switch" lay-text="正常|禁用" lay-filter="status" '+(d.status==1 ? 'checked' : '')+'>';
                }}
            , {field: 'size', width: 150, title: '广告尺寸(宽x高)', align: 'center', templet: function (d) {
                    return d.width + " x " + d.height
                }}
            , {field: 'startTime', width: 180, title: '开始时间', align: 'center'}
            , {field: 'endTime', width: 180, title: '结束时间', align: 'center'}
            , {field: 'viewNum', width: 100, title: '点击率', align: 'center'}
            , {field: 'sort', width: 100, title: '排序', align: 'center'}
            , {field: 'create_time', width: 180, title: '添加时间', align: 'center', templet:"<div>{{layui.util.toDateString(d.create_time*1000, 'yyyy-MM-dd HH:mm:ss')}}</div>"}
            , {field: 'update_time', width: 180, title: '更新时间', align: 'center', templet:"<div>{{layui.util.toDateString(d.update_time*1000, 'yyyy-MM-dd HH:mm:ss')}}</div>"}
            , {fixed: 'right', width: 150, title: '功能操作', align: 'center', toolbar: '#toolBar'}
        ];

        //【渲染TABLE】
        func.tableIns(cols, "tableList");

        //【设置弹框】
        func.setWin("广告");

        //【设置状态】
        func.formSwitch('status', null, function (data, res) {
            console.log("开关回调成功");
        });
    } else {
        //【监听类型】
        var type = $('#type').val();
        if (type == 1) {
            //图片
            $(".cover").removeClass("layui-hide");
        } else {
            // 其他
            $(".cover").addClass("layui-hide");
        }
        form.on('select(type)', function (data) {
            if (data.value == 1) {
                $(".cover").removeClass("layui-hide");

            } else {
                $(".cover").addClass("layui-hide");
            }
        });
    }
});
