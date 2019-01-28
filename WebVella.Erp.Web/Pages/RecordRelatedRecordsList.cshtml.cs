﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using WebVella.Erp.Diagnostics;
using WebVella.Erp.Hooks;
using WebVella.Erp.Web.Hooks;
using WebVella.Erp.Web.Models;

namespace WebVella.Erp.Web.Pages.Application
{
	[Authorize]
	public class RecordRelatedRecordsListPageModel : BaseErpPageModel
	{
		public RecordRelatedRecordsListPageModel([FromServices]ErpRequestContext reqCtx) { ErpRequestContext = reqCtx; }

		public IActionResult OnGet()
		{
			try
			{
				Init();
				if (ErpRequestContext.Page == null) return NotFound();
				if (PageName != ErpRequestContext.Page.Name)
				{
					var queryString = HttpContext.Request.QueryString.ToString();
					return Redirect($"/{ErpRequestContext.App.Name}/{ErpRequestContext.SitemapArea.Name}/{ErpRequestContext.SitemapNode.Name}/r/{ErpRequestContext.ParentRecordId}/rl/{ErpRequestContext.RelationId}/l/{ErpRequestContext.Page.Name}{queryString}");
				}

				var globalHookInstances = HookManager.GetHookedInstances<IPageHook>(HookKey);
				foreach (IPageHook inst in globalHookInstances)
				{
					var result = inst.OnGet(this);
					if (result != null) return result;
				}

				var hookInstances = HookManager.GetHookedInstances<IRecordRelatedRecordsListPageHook>(HookKey);
				foreach (IRecordRelatedRecordsListPageHook inst in hookInstances)
				{
					var result = inst.OnGet(this);
					if (result != null) return result;
				}
				BeforeRender();
				return Page();
			}
			catch (Exception ex)
			{
				new Log().Create(LogType.Error, "RecordRelatedRecordsListPageModel Error on GET", ex);
				BeforeRender();
				return Page();
			}
		}

		public IActionResult OnPost()
		{
			try
			{
				if (!ModelState.IsValid) throw new Exception("Antiforgery check failed.");
				Init();
				if (ErpRequestContext.Page == null) return NotFound();

				var globalHookInstances = HookManager.GetHookedInstances<IPageHook>(HookKey);
				foreach (IPageHook inst in globalHookInstances)
				{
					var result = inst.OnPost(this);
					if (result != null) return result;
				}

				var hookInstances = HookManager.GetHookedInstances<IRecordRelatedRecordsListPageHook>(HookKey);
				foreach (IRecordRelatedRecordsListPageHook inst in hookInstances)
				{
					var result = inst.OnPost(this);
					if (result != null) return result;
				}
				BeforeRender();
				return Page();
			}
			catch (Exception ex)
			{
				new Log().Create(LogType.Error, "RecordRelatedRecordsListPageModel Error on POST", ex);
				BeforeRender();
				return Page();
			}
		}
	}
}